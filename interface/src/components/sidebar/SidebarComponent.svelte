<script>
  import { link } from "svelte-spa-router";

  import HomeSvg from "$assets/svg/HomeSvg.svelte";
  import ProfileSvg from "$assets/svg/ProfileSvg.svelte";
  import IkpSvg from "$assets/svg/IKPSvg.svelte";
  import EgovSvg from "$assets/svg/EGOVSvg.svelte";
  import PersantikSvg from "$assets/svg/PersantikSvg.svelte";
  import ExitSvg from "$assets/svg/ExitSvg.svelte";
</script>

<div class="w-24 fixed h-screen bg-sky-800 text-white flex items-center">
  <ul>
    <li>
      <a href="/" use:link>
        <div
          class="flex flex-col justify-center items-center py-5 px-[.93rem] hover:bg-sky-900 duration-150"
        >
          <ProfileSvg />
          <span>Profil</span>
        </div>
      </a>
    </li>
    <li>
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
    </li>
  </ul>
</div>
