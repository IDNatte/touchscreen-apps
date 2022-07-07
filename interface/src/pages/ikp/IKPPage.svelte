<script>
  import PdfViewerComponents from "$components/PDFViewer/PDFViewerComponents.svelte";
  import { fade } from "svelte/transition";
  import { settings } from "$lib/store/settings.store";

  // PDFFile=
  // https://raw.githubusercontent.com/IDNatte/item_kominfo/03a00e47dde6f9e5ce680ee70d5b139e1c3cf9d7/egov_infra/data.pdf
</script>

<div class="flex-auto content" in:fade>
  <PdfViewerComponents
    PDFTitle="dokumen dan data bidang Informasi & Komunikasi Publik"
    PDFFile={$settings.IKPFileAddress}
  />
</div>
