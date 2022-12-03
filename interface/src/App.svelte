<script>
  import Router from "svelte-spa-router";
  import { routes } from "$pages/router";

  import SidebarComponent from "$components/sidebar/SidebarComponent.svelte";
  import ModalComponent from "$components/modal/ModalComponent.svelte";
  import { settings, changeableAssets } from "$lib/store/settings.store";
  import { closeModal } from "$lib/module/modal/modal";

  const urlTest = /^(http|https):\/\/[^ "]+$/;

  function saveSettings(event) {
    let settingsForm = new FormData(event.target);
    const data = {};
    for (let field of settingsForm) {
      const [key, value] = field;
      if (urlTest.test(String(value))) {
        data[key] = value;
      } else {
        data[key] = "";
      }
    }

    let triggerSave = new CustomEvent("settings-save", {
      detail: {
        data: data,
      },
    });

    document.dispatchEvent(triggerSave);
    closeModal();
  }
</script>

<main class="flex w-full">
  <SidebarComponent />
  <Router {routes} />

  <ModalComponent modalClass="window-settings" modalTitle="pengaturan">
    <div class="settings">
      <form class="__formReset" on:submit|preventDefault={saveSettings}>
        <!-- <div class="_ikp pb-5">
          <label
            for="ikp-fileurl"
            class="form-label inline-block mb-2 text-gray-700"
            >Link data IKP</label
          >
          <input
            required
            id="ikp-fileurl"
            placeholder="Masukkan link file data IKP"
            type="url"
            name="ikp"
            value={$settings.IKPFileAddress}
            class=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          />
        </div>
        <div class="__egov pb-5">
          <label
            for="egov-fileurl"
            class="form-label inline-block mb-2 text-gray-700"
            >Link data E-Gov & Infrastruktur</label
          >
          <input
            required
            id="egov-fileurl"
            placeholder="Masukkan link file data E-Gov & Infrastruktur"
            type="url"
            name="egov"
            value={$settings.EGOVFileAddress}
            class=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          />
        </div>

        <div class="__persantik pb-5">
          <label
            for="persantik-fileurl"
            class="form-label inline-block mb-2 text-gray-700"
            >Link data Persandian & Statistik</label
          >
          <input
            required
            id="persantik-fileurl"
            placeholder="Masukkan link file data Persandian & Statistik"
            type="url"
            name="persantik"
            value={$settings.PersantikFileAddress}
            class=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          />
        </div> -->

        <div class="__egov pb-5">
          <label
            for="changeable-hos"
            class="form-label inline-block mb-2 text-gray-700"
            >Link gambar kepala dinas</label
          >
          <input
            required
            id="changeable-hos"
            placeholder="Masukkan link file gambar kepala dinas"
            type="url"
            name="hos"
            value={$changeableAssets.hos}
            class=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          />
        </div>

        <div class="__egov pb-5">
          <label
            for="changeable-secretary"
            class="form-label inline-block mb-2 text-gray-700"
            >Link gambar sekertaris dinas</label
          >
          <input
            required
            id="changeable-secretary"
            placeholder="Masukkan link file gambar sekertaris dinas"
            type="url"
            name="secretary"
            value={$changeableAssets.secretary}
            class=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          />
        </div>

        <div class="__egov pb-5">
          <label
            for="changeable-structure"
            class="form-label inline-block mb-2 text-gray-700"
            >Link gambar struktur organisasi</label
          >
          <input
            required
            id="changeable-structure"
            placeholder="Masukkan link file gambar struktur organisasi."
            type="url"
            name="structure"
            value={$changeableAssets.structure}
            class=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          />
        </div>

        <div class="__egov pb-5">
          <label
            for="changeable-absent"
            class="form-label inline-block mb-2 text-gray-700"
            >Link Absen (Google Drive)</label
          >
          <input
            required
            id="changeable-absent"
            placeholder="Masukkan link file gambar struktur organisasi."
            type="url"
            name="absent"
            value={$changeableAssets.absent}
            class=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          />
        </div>

        <div class="__egov pb-5">
          <label
            for="changeable-skm"
            class="form-label inline-block mb-2 text-gray-700"
            >Link SKM (Google Drive)</label
          >
          <input
            required
            id="changeable-skm"
            placeholder="Masukkan link file gambar struktur organisasi."
            type="url"
            name="skm"
            value={$changeableAssets.skm}
            class=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          />
        </div>

        <div class="block text-right">
          <button
            type="submit"
            class="inline-block px-6 py-2.5 bg-sky-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-sky-700 hover:shadow-lg focus:bg-sky-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-sky-800 active:shadow-lg transition duration-150 ease-in-out"
            >Simpan</button
          >
        </div>
      </form>
    </div>
  </ModalComponent>

  <ModalComponent modalClass="window-absent" modalTitle="Absen Pengunjung">
    <div class="absent">
      <iframe
        title="Absen Pengunjung"
        src={$changeableAssets.absent}
        class="w-full h-[500px]"
        frameborder="0"
        marginheight="0"
        marginwidth="0">Memuat…</iframe
      >
    </div>
  </ModalComponent>

  <ModalComponent modalClass="window-skm" modalTitle="Absen Pengunjung">
    <div class="skm">
      <iframe
        title="Absen Pengunjung"
        src={$changeableAssets.skm}
        class="w-full h-[500px]"
        frameborder="0"
        marginheight="0"
        marginwidth="0">Memuat…</iframe
      >
    </div>
  </ModalComponent>
</main>
