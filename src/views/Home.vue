<script setup>
import Navbar from '../components/Navbar.vue';
import email from '../components/email.vue';
import github from '../components/github.vue';
import heroBg from '../assets/entrepreneur-etc.png'

const Email = 'mintkung23@gmail.com'

const copyEmail = async () => {
    await navigator.clipboard.writeText(Email)
    alert('Email copied!')
}

</script>



<template>
    <Navbar>
        <!--Container ปรับขนาดตามหน้าจอ-->
        <div class="min-h-screen">
            <!--Hero Section-->
            <div class="flex flex-col w-full h-225" :style="{ backgroundImage: `url(${heroBg})` }">
                <!--Text Center-->
                <div class="flex">
                    <div class="w-1/2 mt-8 md:mt-12 lg:mt-16 px-4">
                        <!--Title-->
                        <div class="flex flex-col sm:text-3xl md:text-4xl lg:text-5xl">
                            <h2 class="text-5xl mt-60 ml-30">Hi, I am</h2>
                            <h1 class="text-6xl mt-10 ml-30">Chalisa Panjasri</h1>
                            <p class="text-[#52565e] ml-30 text-3xl mt-5">Computer Engineering Student &</p>
                            <p class="text-[#52565e] ml-30 text-3xl"> Junior Fullstack Developer.</p>
                        </div>
                        <!--Social Icons-->
                        <div class="flex mt-30 gap-4 md:mt-10 ml-30">
                            <email @click="copyEmail" class="ml-3 cursor-pointer w-8 h-8 sm:w-10 sm:h-10"></email>
                            <a href="https://github.com/ChalisaMInt23" target="_black">
                                <github class="ml-8 cursor-pointer w-8 h-8 sm:w-10 sm:h-10"></github>
                            </a>
                        </div>
                    </div>
                    <!--Profile Image-->
                    <div class="w-1/2 ">
                        <img class="w-120 ml-50 mt-40 rounded-full" src="../assets/Profile.png" alt="">
                    </div>
                </div>

            </div>
        </div>
        <div class="w-400 mx-auto">
            <!--About Me-->
            <div class="w-full flex justify-center">
                <div class="border border-5 w-80 text-center text-4xl p-7 font-bold scroll-mt-24" id="aboutme">
                    <p>ABOUT ME</p>
                </div>
            </div>
            <div>
                <p class="mt-15 justify-center mr-50 text-2xl">
                    Hello,
                </p>
                <p class="mt-5 justify-center mr-50 text-2xl">
                    I am a Computer Engineering student with a strong interest in web development.
                </p>
                <p class="mt-5 justify-center mr-50 text-2xl">
                    I am able to build modern and responsive websites using JavaScript and frameworks such as Vue.js
                    and React.js. I have experience working with multiple programming languages, including C, C++,
                    C#, JavaScript, and Python, which gives me a solid foundation in programming logic and software
                    development.
                </p>
                <p class="mt-5 justify-center mr-50 text-2xl">
                    I enjoy learning through hands-on projects, improving my skills by solving real problems, and
                    continuously developing myself as a software developer.
                </p>
            </div>
            <!--Project section-->
            <div class="mt-16 md:mt-24 lg:mt-32 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 scroll-mt-24"
                id="project">
                <div class="w-full flex justify-center">
                    <div class="border border-5 w-80 text-center text-4xl p-7 font-bold">
                        <p>My-project</p>
                    </div>
                </div>
            </div>
            <Projectcard></Projectcard>

            <!--Skills Section-->
            <div class="mt-16 md:mt-24 lg:mt-32 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 "
                id="skills">
                <div class="w-full flex justify-center">
                    <div class="border border-5 w-80 text-center text-4xl p-7 font-bold">
                        <p>Skills</p>
                    </div>
                </div>
            </div>
            <!--Skills Grid-->
            <div
                class="grid grid-cols-1 gap-4 sm:grids-cols-2 lg:grid-cols-3 xl:grid-cols-5 sm:gap-6 lg:gap-8 mt-8 md:mt-10">
                <!--Languages-->
                <div class="mt-10 border border-black-300 text-center">
                    <div class="border border-b border-black-300 p-3 text-lg sm:text-xl font-semibold">Lanjuages</div>
                    <div class="text-base sm:text-lg md:text-xl p-4 space-y-2">
                        <p>C# (OOP)</p>
                        <p>C</p>
                        <p>C++</p>
                        <p>JavaScript</p>
                        <p>Python</p>
                    </div>

                </div>
                <!--Database-->
                <div class="mt-10 border border-black-300 text-center">
                    <div class="border border-b border-black-300 p-3 text:lg sm:text-xl font-semibold">
                        Database<br />(Learning)</div>
                    <div class="text-base sm:text-lg md:text-xl p-4 space-y-2">
                        <p>SQL</p>
                        <p>MySQL</p>
                        <p>SQLite</p>
                    </div>
                </div>
                <!--Tools-->
                <div class="mt-10 border border-black-300 text-center">
                    <div class="border border-b border-black-300 p-3 text-lg sm:text-xl font-semibold">Tools</div>
                    <div class="text-base sm:text-lg md:text-xl p-4 space-y-2">
                        <p>SQL</p>
                        <p>Git</p>
                        <p>Figma</p>
                        <p>Postman</p>
                        <p>Tailwind CSS (Fully responsive)</p>
                    </div>
                </div>
                <!--Frameworks-->
                <div class="mt-10 border border-black-300 text-center">
                    <div class="border border-b border-black-300 p-3 text:lg sm:text-xl font-semibold">Frameworks</div>
                    <div class="text-base sm:text-lg md:text-xl p-4 space-y-2">
                        <p>Vue.js</p>
                        <p>Nuxt.js</p>
                        <p>React.js<br />(Learning)</p>
                    </div>
                </div>
                <!--Other-->
                <div class="mt-10 border border-black-300 text-center">
                    <div class="border border-b border-black-300 p-3 text-lg sm:text-xl font-semibold">Other</div>
                    <div class="text-base sm:text-lg md:text-xl p-4 space-y-2">
                        <p>Node.js</p>
                        <p>Express.js</p>
                    </div>
                </div>
            </div>
        </div>
    </Navbar>
</template>
