<script setup lang="ts">
import { ref, watch } from 'vue'

const mobileMenuOpen = ref(false)

const toggleMenu = () => {
    mobileMenuOpen.value = !mobileMenuOpen.value
}

const closeMenu = () => {
    mobileMenuOpen.value = false
}

watch(mobileMenuOpen, (open) => {
    document.body.style.overflow = open ? 'hidden' : ''
})
</script>

<template>
    <!-- ROOT -->
    <div class="w-full overflow-x-hidden">

        <!-- NAVBAR -->
        <nav class="fixed top-0 left-0 w-full z-50
             h-16 md:h-20
             backdrop-blur-xl bg-black/70
             border-b border-white/10">

            <div class="w-full
               max-w-none lg:max-w-7xl 2xl:max-w-[1600px]
               mx-auto h-full
               flex items-center justify-between
               px-4 sm:px-6 lg:px-8">

                <!-- Logo -->
                <div class="text-2xl md:text-3xl font-bold">
                    <span class="text-[#FF9494]">Port</span>folio
                </div>

                <!-- Desktop Menu -->
                <div class="hidden lg:flex gap-8 text-lg">
                    <a href="/#aboutme" class="nav-btn">About me</a>
                    <a href="/#project" class="nav-btn">My project</a>
                    <a href="/#skills" class="nav-btn">Skills</a>
                </div>

                <!-- Mobile Button -->
                <button class="lg:hidden p-2 rounded-md hover:bg-white/10" @click="toggleMenu">
                    <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>

            <!-- MOBILE MENU -->
            <div v-if="mobileMenuOpen" class="lg:hidden fixed
               left-0 right-0 bottom-0 top-16
               bg-black/95 backdrop-blur-xl
               flex flex-col items-center justify-center
               gap-10 text-2xl">
                <a href="/#aboutme" @click="closeMenu" class="mobile-nav">About me</a>
                <a href="/#project" @click="closeMenu" class="mobile-nav">My project</a>
                <a href="/#skills" @click="closeMenu" class="mobile-nav">Skills</a>
            </div>
        </nav>

        <!-- PAGE CONTENT -->
        <main class="pt-16 md:pt-20 w-full">
            <slot></slot>
        </main>

        <!-- FOOTER -->
        <footer class="border-t border-gray-700 mt-24 px-4 py-6 text-center">
            <p class="text-sm sm:text-base md:text-lg">
                ©2026 Chalisa Panjasri. All Rights Reserved
            </p>
        </footer>

    </div>
</template>
