<script>
  import CloseSvg from "$assets/svg/CloseSvg.svelte";

  import { closeModal } from "$lib/module/modal/modal";
  import { modal } from "$lib/store/modal.store";

  export let modalClass;
  export let modalTitle;

  function escapeKeyPress(event) {
    if (event.keyCode === 27) {
      closeModal();
    }
  }

  function closeButtonPress() {
    closeModal();
  }
</script>

<svelte:window on:keyup|preventDefault={escapeKeyPress} />

{#if $modal.class === modalClass}
  <div
    class:fixed={$modal.show}
    class:hidden={!$modal.show}
    style="padding-left: 0px !important;"
    class="ml-[6rem] {modalClass} flex w-full items-center justify-center h-screen bg-white/[0.6]"
  >
    <div
      class="modal-content h-auto flex flex-col w-7/12 bg-white shadow-lg border rounded"
    >
      <div
        class="flex justify-between items-center px-4 py-5 border-b border-b-gray-300"
      >
        <span class="font-bold capitalize text-gray-600">{modalTitle}</span>
        <button
          class="duration-300 hover:rotate-90"
          on:click={closeButtonPress}
        >
          <CloseSvg color="stroke-gray-500" />
        </button>
      </div>
      <div class="modal-content p-6">
        <slot />
      </div>
    </div>
  </div>
{/if}
