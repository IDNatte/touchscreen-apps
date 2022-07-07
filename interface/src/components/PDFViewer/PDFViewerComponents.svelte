<script>
  import LoaderComponent from "$components/loader/LoaderComponent.svelte";

  import * as pdfjsLib from "pdfjs-dist";
  import * as pdfjsWorker from "pdfjs-dist/build/pdf.worker.entry";
  import { onMount } from "svelte";
  import { fade } from "svelte/transition";

  export let PDFFile;
  export let PDFTitle;

  let PdfPageNumber;
  let PdfCanvas;

  let PdfInitPageNumber = 1;
  let PdfPageRender = false;
  let PdfPageNext = null;
  let PdfResolution = 2;
  let PdfScale = 1.2;
  let PdfPageCounts;
  let PdfInstance;

  function renderPDF(pageNumber) {
    PdfPageRender = true;
    PdfInstance.getPage(pageNumber).then((PdfPage) => {
      let vp = PdfPage.getViewport({ scale: PdfScale });

      PdfCanvas.height = PdfResolution * vp.height;
      PdfCanvas.width = PdfResolution * vp.width;

      PdfCanvas.style.height = `${vp.height}px`;
      PdfCanvas.style.width = `${vp.width}px`;

      let PdfRenderContext = {
        canvasContext: PdfCanvas.getContext("2d"),
        viewport: vp,
        transform: [PdfResolution, 0, 0, PdfResolution, 0, 0],
      };

      let PdfRenderTask = PdfPage.render(PdfRenderContext);

      PdfRenderTask.promise.then(() => {
        PdfPageRender = false;

        if (PdfPageNext !== null) {
          renderPDF(PdfPageNext);
          PdfPageNext = null;
        }
      });
    });

    PdfPageNumber.textContent = pageNumber;
  }

  function PdfRenderQueue(PageNumber) {
    if (PdfPageRender) {
      PdfPageNext = PageNumber;
    } else {
      renderPDF(PageNumber);
    }
  }

  function PdfPreview() {
    if (PdfInitPageNumber <= 1) {
      return;
    }

    PdfInitPageNumber--;
    PdfRenderQueue(PdfInitPageNumber);
  }

  function PdfNext() {
    if (PdfInitPageNumber >= PdfInstance.numPages) {
      return;
    }

    PdfInitPageNumber++;
    PdfRenderQueue(PdfInitPageNumber);
  }

  onMount(() => {
    // @ts-ignore
    pdfjsLib.GlobalWorkerOptions.workerSrc = pdfjsWorker;

    pdfjsLib.getDocument({ url: PDFFile }).promise.then((doc) => {
      PdfInstance = doc;
      PdfPageCounts.textContent = doc.numPages;
      renderPDF(PdfInitPageNumber);
    });
  });
</script>

<div class="__pdfViewer mt-5">
  <div class="border rounded border-slate-500">
    <h2 class="capitalize font-semibold text-2xl py-6 text-center">
      {PDFTitle}
    </h2>
  </div>
  <div class="flex justify-center py-5 items-center">
    <button
      class="bg-sky-600 rounded-full px-3 py-2 text-white"
      on:click={PdfPreview}>Sebelumnya</button
    >
    <div class="px-6">
      <span bind:this={PdfPageNumber} /> / <span bind:this={PdfPageCounts} />
    </div>
    <button
      class="bg-sky-600 rounded-full px-3 py-2 text-white"
      on:click={PdfNext}>Selanjutnya</button
    >
  </div>
  <div class="flex flex-col items-center justify-center">
    {#if PdfPageRender}
      <div class="h-screen flex items-center">
        <LoaderComponent />
      </div>
    {/if}
    <canvas
      class:hidden={PdfPageRender === true}
      class="__pdfViewerCanvas m-auto"
      in:fade={{ duration: 250, delay: 250 }}
      bind:this={PdfCanvas}
    />
  </div>
</div>

<style>
  .__pdfViewerCanvas {
    direction: ltr;
  }
</style>
