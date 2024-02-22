<template>
    <el-container class="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">

        <el-main>
            <el-skeleton v-if="loading" :rows="5"></el-skeleton>

            <div class="mt-6 grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-4 md:gap-y-2 lg:gap-x-8" v-else>
                <div v-for="product in products" :key="product.id" class="group relative">
                    <div class="h-56 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-72 xl:h-80">
                        <img :src="product.images[0]" :alt="product.title"
                            class="h-full w-full object-cover object-center" />
                    </div>
                    <h3 class="mt-4 text-sm text-gray-300">
                        <span class="absolute inset-0" />
                        {{ product.title }}
                    </h3>
                    <p class="mt-1 font-medium font-bold text-gray-400">${{ product.price }}</p>
                </div>
            </div>
        </el-main>
    </el-container>
</template>


<script setup lang="ts">
import { onMounted, ref, watch } from "vue";
import type { Product } from 'product';
import api from "@/utils/api";
const loading = ref<boolean>(false);
const products = ref<Product[]>([]);
const input = ref<string>('');

// Fetch all products
async function fetchProducts() {
    loading.value = true;

    const { data, error } = await api<Product[], any>('/products?offset=0&limit=40');

    if (data) products.value = data;
    else console.log(error)

    loading.value = false;
}

// Fetch products on mounted
onMounted(() => {
    fetchProducts();
});

</script>
  