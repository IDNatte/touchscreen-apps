<script>
  import CloseSvg from "$assets/svg/CloseSvg.svelte";

  export let modalClass;
  export let modalTitle;

  function escapePressListener(event) {
    if (event.keyCode === 27) {
      console.log("escape key pressed");
    }
  }
</script>

<svelte:window on:keyup|preventDefault={escapePressListener} />

<div
  style="padding-left: 0px !important;"
  class="ml-[6rem] {modalClass} fixed flex w-full items-center justify-center h-screen bg-white/[0.6]"
>
  <div
    class="modal-content h-3/6 flex flex-col w-7/12 bg-white shadow-lg border rounded"
  >
    <div
      class="flex justify-between items-center px-4 py-5 border-b border-b-gray-300"
    >
      <span class="font-bold capitalize text-gray-600">{modalTitle}</span>
      <button class="duration-300 hover:rotate-90">
        <CloseSvg color="stroke-gray-500" />
      </button>
    </div>
    <div class="modal-content p-6">
      <slot />
    </div>
  </div>
</div>
