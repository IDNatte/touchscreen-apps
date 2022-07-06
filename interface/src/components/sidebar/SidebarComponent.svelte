<script lang="ts">
  import { Link } from "svelte-navigator";

  import HomeSvg from "$assets/svg/HomeSvg.svelte";
  import ProfileSvg from "$assets/svg/ProfileSvg.svelte";
  import IkpSvg from "$assets/svg/IKPSvg.svelte";
  import EgovSvg from "$assets/svg/EGOVSvg.svelte";
  import PersantikSvg from "$assets/svg/PersantikSvg.svelte";
</script>

<div class="w-24 fixed h-screen bg-sky-800 text-white flex items-center">
  <ul>
    <li>
      <Link to="/">
        <div
          class="flex flex-col justify-center items-center py-5 px-[.93rem] hover:bg-sky-900 duration-150"
        >
          <HomeSvg />
          <span>Beranda</span>
        </div>
      </Link>
    </li>
    <li>
      <Link to="/profile">
        <div
          class="flex flex-col justify-center items-center py-5 px-[.93rem] hover:bg-sky-900 duration-150"
        >
          <ProfileSvg />
          <span>Profil</span>
        </div>
      </Link>
    </li>
    <li>
      <Link to="/egov">
        <div
          class="flex flex-col justify-center items-center py-5 px-[.93rem] hover:bg-sky-900 duration-150"
        >
          <EgovSvg />
          <span class="text-[12px]">E-Gov</span>
          <span class="text-[12px]">&</span>
          <span class="text-[12px]">Infrastruktur</span>
        </div>
      </Link>
    </li>
    <li>
      <Link to="/ikp">
        <div
          class="flex flex-col justify-center items-center py-5 px-[.93rem] hover:bg-sky-900 duration-150"
        >
          <IkpSvg />
          <span class="text-[12px]">Informasi</span>
          <span class="text-[12px]">Komunikasi</span>
          <span class="text-[12px]">Publik</span>
        </div>
      </Link>
    </li>
    <li>
      <Link to="/persantik">
        <div
          class="flex flex-col justify-center items-center py-5 px-[.93rem] hover:bg-sky-900 duration-150"
        >
          <PersantikSvg />
          <span class="text-[12px]">Persandian</span>
          <span class="text-[12px]">&</span>
          <span class="text-[12px]">Statistik</span>
        </div>
      </Link>
    </li>
  </ul>
</div>
