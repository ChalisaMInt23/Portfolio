<script>

</script>

<template>
    <!-- Navbar ลอยทับ -->
    <nav class="fixed top-0 left-0 w-full h-20 z-50 backdrop-blur-2xl">
        <div class="flex justify-end items-center h-full pr-16 gap-6">
            <RouterLink to="/#about">
                <button class="btn btn-ghost text-[#6d6e70] rounded-full">About me</button>
            </RouterLink>
            <button class="btn btn-ghost text-[#6d6e70] rounded-full">My projrct</button>
            <button class="btn btn-ghost text-[#6d6e70] rounded-full">Skills</button>
            <button class="btn btn-soft text-black rounded-full">CONTACT ME</button>
        </div>
    </nav>

    <!-- ❌ ไม่มี pt-20 -->
    <slot></slot>
</template>