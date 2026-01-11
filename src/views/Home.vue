<script setup>
import Navbar from '../components/Navbar.vue'
import email from '../components/email.vue'
import github from '../components/github.vue'

const Email = 'mintkung23@gmail.com'

const copyEmail = async () => {
    await navigator.clipboard.writeText(Email)
    alert('Email copied!')
}
</script>

<template>
    <Navbar>
        <section class="relative w-full flex items-center min-h-[calc(100vh-80px)] -mt-4 overflow-hidden">
            <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8
           flex flex-col lg:flex-row
           items-center justify-center
           gap-12">
                <!-- Animated Background -->
                <div class="absolute inset-0 animated-bg"></div>

                <!-- TEXT -->
                <div class="w-full lg:w-1/2 text-center lg:text-left">
                    <h2 class="text-[#52565e] text-3xl sm:text-4xl lg:text-5xl font-medium mt-10">
                        Hi, I am
                    </h2>

                    <h1 class="text-[#B84068] text-4xl sm:text-5xl lg:text-6xl font-bold mt-4">
                        Chalisa Panjasri
                    </h1>

                    <p class="text-[#52565e] text-lg sm:text-xl lg:text-2xl mt-6">
                        Computer Engineering Student &
                        <br class="hidden sm:block" />
                        Junior Fullstack Developer.
                    </p>

                    <div class="flex justify-center lg:justify-start gap-6 mt-8">
                        <email @click="copyEmail" class="w-8 h-8 sm:w-10 sm:h-10 cursor-pointer" />
                        <a href="https://github.com/ChalisaMInt23" target="_blank">
                            <github class="w-8 h-8 sm:w-10 sm:h-10 cursor-pointer" />
                        </a>
                    </div>
                </div>

                <!-- IMAGE -->
                <div class="w-full lg:w-1/2 flex justify-center md:mt-10 xl:mt-10">
                    <img src="../assets/Profile.png" class="w-48 sm:w-64 lg:w-80 rounded-full object-cover" />
                </div>
            </div>
        </section>



        <!-- CONTENT -->
        <section class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-black">

            <!-- ABOUT ME -->
            <div class="flex justify-center mt-24 scroll-mt-24" id="aboutme">
                <div class="border px-10 py-4 text-2xl sm:text-3xl font-bold">
                    ABOUT ME
                </div>
            </div>

            <div class="mt-10 text-lg sm:text-xl space-y-4">
                <p>Hello,</p>
                <p>
                    I am a Computer Engineering student with a strong interest in web development.
                </p>
                <p>
                    I am able to build modern and responsive websites using JavaScript and frameworks
                    such as Vue.js and React.js.
                </p>
                <p>
                    I enjoy learning through hands-on projects and continuously developing myself
                    as a software developer.
                </p>
            </div>

            <!-- PROJECT -->
            <div class="flex justify-center mt-32 scroll-mt-24" id="project">
                <div class="border px-10 py-4 text-2xl sm:text-3xl font-bold">
                    My Project
                </div>
            </div>

            <Projectcard />

            <!-- SKILLS -->
            <div class="flex justify-center mt-32 scroll-mt-24" id="skills">
                <div class="border px-10 py-4 text-2xl sm:text-3xl font-bold">
                    Skills
                </div>
            </div>

            <!-- SKILLS GRID -->
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5
               gap-6 mt-10">
                <div class="border text-center">
                    <div class="border-b p-3 font-semibold">Languages</div>
                    <div class=" p-4 space-y-2">
                        <p>C# (OOP)</p>
                        <p>C</p>
                        <p>C++</p>
                        <p>JavaScript</p>
                        <p>Python</p>
                    </div>
                </div>

                <div class="border text-center">
                    <div class="border-b p-3 font-semibold">Database</div>
                    <div class="text-gray p-4 space-y-2">
                        <p>SQL</p>
                        <p>MySQL</p>
                        <p>SQLite</p>
                    </div>
                </div>

                <div class="border text-center">
                    <div class="border-b p-3 font-semibold">Tools</div>
                    <div class="p-4 space-y-2">
                        <p>Git</p>
                        <p>Figma</p>
                        <p>Postman</p>
                        <p>Tailwind CSS</p>
                    </div>
                </div>

                <div class="border text-center">
                    <div class="border-b p-3 font-semibold">Frameworks</div>
                    <div class="p-4 space-y-2">
                        <p>Vue.js</p>
                        <p>Nuxt.js</p>
                        <p>React.js</p>
                    </div>
                </div>

                <div class="border text-center">
                    <div class="border-b p-3 font-semibold">Other</div>
                    <div class="p-4 space-y-2">
                        <p>Node.js</p>
                        <p>Express.js</p>
                    </div>
                </div>
            </div>
        </section>
    </Navbar>
</template>
