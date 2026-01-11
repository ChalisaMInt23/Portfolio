<script setup lang="ts">
import { ref } from 'vue'

const mobileMenuOpen = ref(false)

const toggleMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

const closeMenu = () => {
  mobileMenuOpen.value = false
}
</script>


<template>
    <!-- Navbar -->
    <nav class="fixed top-0 left-0 w-full h-20 z-50 backdrop-blur-2xl border-b border-white/10">
        <div class="max-w-7xl mx-auto h-full flex items-center justify-between px-4">

            <!-- Logo -->
            <div class="text-xl font-bold">
                <span class="text-[#C778DD]">Port</span>folio
            </div>

            <!-- Desktop Menu -->
            <div class="hidden lg:flex gap-8">
                <a href="/#aboutme" class="nav-btn">About me</a>
                <a href="/#project" class="nav-btn">My project</a>
                <a href="/#skills" class="nav-btn">Skills</a>
            </div>

            <!-- Mobile Hamburger -->
            <button class="lg:hidden" @click="toggleMenu">
                <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </button>
        </div>

        <!-- Mobile Menu -->
        <div v-if="mobileMenuOpen"
            class="lg:hidden absolute top-20 left-0 w-full bg-black/80 backdrop-blur-xl flex flex-col items-center gap-6 py-6">
            <a href="/#aboutme" @click="closeMenu" class="mobile-nav">About me</a>
            <a href="/#project" @click="closeMenu" class="mobile-nav">My project</a>
            <a href="/#skills" @click="closeMenu" class="mobile-nav">Skills</a>
        </div>
    </nav>

    <slot></slot>

    <!-- Footer -->
    <footer class="border-t border-gray-700 mt-20 md:mt-32 flex flex-col items-center p-6">
        <p class="text-sm text-center">@2026 Chalisa Panjasri All Rights Reserved</p>
    </footer>
</template>
