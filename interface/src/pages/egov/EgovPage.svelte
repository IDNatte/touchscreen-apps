<script lang="ts">
  import { fade } from "svelte/transition";

  import pdfjs from "pdfjs-dist";
  import pdfjsWorkerEntry from "pdfjs-dist/build/pdf.worker.entry";
  import { onMount } from "svelte";

  onMount(() => {
    // let pdf =
  });
</script>

<div class="flex-auto content" in:fade>
  <div class="grid place-items-center">
    <h1 class="text-xl uppercase font-semibold py-6">
      data dan informasi bidang egov
    </h1>
  </div>
  <div class="border-2 rounded">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, eum.
    At ratione autem atque eveniet sequi beatae nihil dolores assumenda culpa
    sed amet fugiat, enim nobis quibusdam vitae magni repellat.
  </div>
</div>
