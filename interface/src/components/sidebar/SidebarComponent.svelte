<script>
  import { link } from "svelte-spa-router";

  import { openModal } from "$lib/module/modal/modal";

  import ProfileSvg from "$assets/svg/ProfileSvg.svelte";
  import SettingsSvg from "$assets/svg/SettingsSvg.svelte";
  import ClipboardSvg from "$assets/svg/ClipboardSvg.svelte";
</script>

<div class="flex fixed h-full">
  <div
    class="rounded drop-shadow text-white bg-sky-700 flex items-center my-5 mx-2"
  >
    <ul>
      <li>
        <a href="/" use:link>
          <div class="navigation">
            <ProfileSvg />
            <span class="text-[12px]">Profile</span>
          </div>
        </a>
      </li>

      <li>
        <a href="#!" on:click|preventDefault={() => openModal("window-absent")}>
          <div class="navigation">
            <ClipboardSvg />
            <span class="text-[12px]">Absen</span>
            <span class="text-[12px]">Pengunjung</span>
          </div>
        </a>
      </li>

      <li>
        <a href="#!" on:click|preventDefault={() => openModal("window-skm")}>
          <div class="navigation">
            <ClipboardSvg />
            <span class="text-[12px]">Survey</span>
            <span class="text-[12px]">SKM</span>
          </div>
        </a>
      </li>

      <li>
        <a
          href="#!"
          on:click|preventDefault={() => openModal("window-settings")}
        >
          <div class="navigation">
            <SettingsSvg />
            <span class="text-[12px]">Pengaturan</span>
          </div>
        </a>
      </li>
    </ul>
  </div>
</div>

<style lang="postcss">
  .navigation {
    @apply flex flex-col justify-center items-center py-5 px-[.93rem] duration-150;
  }

  .navigation:hover {
    @apply bg-sky-900;
  }
</style>
