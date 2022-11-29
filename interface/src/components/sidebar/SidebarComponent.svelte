<script>
  import { link } from "svelte-spa-router";

  import { openModal } from "$lib/module/modal/modal";

  import ProfileSvg from "$assets/svg/ProfileSvg.svelte";
  // import IkpSvg from "$assets/svg/IKPSvg.svelte";
  // import EgovSvg from "$assets/svg/EGOVSvg.svelte";
  // import PersantikSvg from "$assets/svg/PersantikSvg.svelte";
  import SettingsSvg from "$assets/svg/SettingsSvg.svelte";
  import ClipboardSvg from "$assets/svg/ClipboardSvg.svelte";
</script>

<div class="w-24 fixed h-screen bg-sky-800 text-white flex items-center">
  <ul>
    <li>
      <a href="/" use:link>
        <div
          class="flex flex-col justify-center items-center py-5 px-[.93rem] hover:bg-sky-900 duration-150"
        >
          <ProfileSvg />
          <span class="text-[12px]">Profile</span>
        </div>
      </a>
    </li>

    <!-- <li>
      <a href="/egov" use:link>
        <div
          class="flex flex-col justify-center items-center py-5 px-[.93rem] hover:bg-sky-900 duration-150"
        >
          <EgovSvg />
          <span class="text-[12px]">E-Gov</span>
          <span class="text-[12px]">&</span>
          <span class="text-[12px]">Infrastruktur</span>
        </div>
      </a>
    </li>
    <li>
      <a href="/ikp" use:link>
        <div
          class="flex flex-col justify-center items-center py-5 px-[.93rem] hover:bg-sky-900 duration-150"
        >
          <IkpSvg />
          <span class="text-[12px]">Informasi</span>
          <span class="text-[12px]">Komunikasi</span>
          <span class="text-[12px]">Publik</span>
        </div>
      </a>
    </li>
    <li>
      <a href="/persantik" use:link>
        <div
          class="flex flex-col justify-center items-center py-5 px-[.93rem] hover:bg-sky-900 duration-150"
        >
          <PersantikSvg />
          <span class="text-[12px]">Persandian</span>
          <span class="text-[12px]">&</span>
          <span class="text-[12px]">Statistik</span>
        </div>
      </a>
    </li> -->

    <li>
      <a href="#!" on:click|preventDefault={() => openModal("window-absent")}>
        <div
          class="flex flex-col justify-center items-center py-5 px-[.93rem] hover:bg-sky-900 duration-150"
        >
          <ClipboardSvg />
          <span class="text-[12px]">Absen</span>
          <span class="text-[12px]">Pengunjung</span>
        </div>
      </a>
    </li>

    <li>
      <a href="#!" on:click|preventDefault={() => openModal("window-settings")}>
        <div
          class="flex flex-col justify-center items-center py-5 px-[.93rem] hover:bg-sky-900 duration-150"
        >
          <SettingsSvg />
          <span class="text-[12px]">Setting</span>
        </div>
      </a>
    </li>
  </ul>
</div>
