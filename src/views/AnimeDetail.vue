<template>
   <!-- anime detail -->
    <div id="anime-detail" class="container">
        <div class="py-5 text-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" fill="gold" class="bi bi-watch" viewBox="0 0 16 16">
                <path d="M8.5 5a.5.5 0 0 0-1 0v2.5H6a.5.5 0 0 0 0 1h2a.5.5 0 0 0 .5-.5V5z"/>
                <path d="M5.667 16C4.747 16 4 15.254 4 14.333v-1.86A5.985 5.985 0 0 1 2 8c0-1.777.772-3.374 2-4.472V1.667C4 .747 4.746 0 5.667 0h4.666C11.253 0 12 .746 12 1.667v1.86a5.99 5.99 0 0 1 1.918 3.48.502.502 0 0 1 .582.493v1a.5.5 0 0 1-.582.493A5.99 5.99 0 0 1 12 12.473v1.86c0 .92-.746 1.667-1.667 1.667H5.667zM13 8A5 5 0 1 0 3 8a5 5 0 0 0 10 0z"/>
            </svg>
            <h2>Anime Name</h2>
            <p class="lead"></p>
        </div>
        <div class="justify-content-center d-flex mx-auto">
            <div class="card" style="width: 60%;">
                <img src="https://picsum.photos/200" class="card-img-top" alt="...">
                <div class="card-body text-black">
                    <h5 class="card-title fst-italic">title</h5>
                    <p class="card-text">detail</p>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">============== </li>
                    <li class="list-group-item">=================</li>
                    <li class="list-group-item">
                        <!-- <img :src="QRCode" alt="qrcode"> -->
                    </li>
                </ul>
                <div class="card-body">
                   <button @click.prevent="backToPreviousPage" type="button" class="btn btn-secondary btn-rounded">Back</button>
                </div>
            </div>
        </div>

    </div> <!-- End anime detail-->
</template>

<script>
export default {
    name: "AnimeDetail"
}
</script>

<style>

</style>