<script>
  // @ts-ignore
  import { Accordion, AccordionItem } from "svelte-collapsible";
  import { changeableAssets } from "$lib/store/settings.store";
  import { fade } from "svelte/transition";
</script>

<div class="flex-auto content" in:fade>
  <div class="grid grid-cols-2 place-items-center">
    <div class="col-span-2 border rounded border-slate-500 my-6 w-full">
      <h2 class="capitalize font-semibold text-2xl text-center py-6">
        Profile Dinas Komunikasi dan Informatika Kabupaten Tapin
      </h2>
    </div>

    <div class="profile-display flex flex-col">
      <img class="rounded-sm" src={$changeableAssets.hos} alt="kepala dinas" />
      <div class="text-center">
        <div class="text-center py-5 text-xl font-semibold ">Kepala Dinas</div>
        <div>H.M. Tamberin, S.Sos, MM.</div>
        <div>NIP. 19630210 198603 1 028</div>
      </div>
    </div>
    <div class="profile-display flex flex-col">
      <img
        class="rounded-sm"
        src={$changeableAssets.secretary}
        alt="sekertaris"
      />
      <div class="text-center">
        <div class="py-5 text-xl font-semibold">Sekertaris Dinas</div>
        <div>Haris Faridi, S.Sos, M.M.</div>
        <div>NIP. 19700325 199303 1 005</div>
      </div>
    </div>

    <div class="col-span-2 pt-12 mb-12">
      <Accordion>
        <AccordionItem key="sejarah">
          <div
            class="p-5 border-2 bg-gray-700 text-white rounded"
            slot="header"
          >
            Sejarah Dinas Komunikasi dan Informatika Kabupaten Tapin
          </div>
          <div class="p-8 mb-2" slot="body">
            Semenjak diberlakukannya Peraturan Daerah Kabupaten Tapin No. 09
            Tahun 2016 tentang pembentukan dan susunan perangkat daerah
            Kabupaten Tapin. Maka Dinas Perhubungan Komunikasi dan Informatika
            telah berpisah antara Dinas Perhubungan dan Dinas Komunikasi dan
            Informatika agar lebih fokus dalam menjalankan tugas dan fungsi nya
            masing-masing
          </div>
        </AccordionItem>
        <AccordionItem key="tupoksi">
          <div
            class="p-5 border-2 bg-gray-700 text-white rounded"
            slot="header"
          >
            Tugas Pokok Dinas Komunikasi dan Informatika Kabupaten Tapin
          </div>
          <div class="p-8 mb-2" slot="body">
            Meningkatkan Cakupan Pelayanan Informasi dan Komunikasi
          </div>
        </AccordionItem>
        <AccordionItem key="vnm">
          <div
            class="p-5 border-2 bg-gray-700 text-white rounded"
            slot="header"
          >
            Visi Dan Misi Dinas Komunikasi dan Informatika Kabupaten Tapin
          </div>
          <div class="p-8 border mb-2" slot="body">
            <div class="grid grid-cols-2">
              <div class="visi">
                <h1 class="text-xl">Visi</h1>
                <div class="py-4">
                  Terwujudnya Tatanan Komunikasi dan Informatika yang handal,
                  Berdaya Saing Tinggi, Berdayaguna, Berhasil Guna dan efesien
                  serta aman
                </div>
              </div>
              <div class="misi">
                <h1 class="text-xl">Misi</h1>
                <div>
                  <ul class="list-outside divide-y">
                    <li class="py-4">
                      Meningkatkan Pelayanan Informasi dan Komunikasi Bagi
                      Segenap Lapisan Masyarakat
                    </li>
                    <li class="py-4">
                      Menciptakan Pelayanan Pemerintahan yang yang didukung
                      sistem aplikasi E-Government
                    </li>
                    <li class="py-4">
                      Menjadi Pelopor Data Statistik Terpercaya Untuk Semua
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </AccordionItem>
        <AccordionItem key="fungsi">
          <div
            class="p-5 border-2 bg-gray-700 text-white rounded"
            slot="header"
          >
            Fungsi Dinas Komunikasi dan Informatika Kabupaten Tapin
          </div>
          <div class="p-8 mb-2" slot="body">
            Fungsi Dinas Komunikasi Dan Informatika Kabupaten Tapin antara lain
            <ul class="px-4 pt-6 list-outside divide-y">
              <li class="py-4">
                Meningkatkan Pelayanan Informasi dan Komunikasi Bagi Segenap
                Lapisan Masyarakat
              </li>
              <li class="py-4">
                Menciptakan Pelayanan Pemerintahan yang yang didukung sistem
                aplikasi E-Government
              </li>
              <li class="py-4">
                Menjadi Pelopor Data Statistik Terpercaya Untuk Semua
              </li>
            </ul>
          </div>
        </AccordionItem>
        <AccordionItem key="strukturorg">
          <div class="p-5 bg-gray-700 text-white rounded" slot="header">
            Struktur Organisasi Dinas Komunikasi dan Informatika Kabupaten Tapin
          </div>
          <div class="p-8 mb-2" slot="body">
            <div class="flex justify-center align-middle">
              <img class="" src={$changeableAssets.structure} alt="" />
            </div>
          </div>
        </AccordionItem>
      </Accordion>
    </div>
  </div>
</div>
