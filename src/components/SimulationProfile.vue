<template>
  <div class="flex flex-col w-fit px-2">
    <div class="p-6 shadow-lg rounded-2xl w-fit self-end translate-y-5 translate-x-3 bg-white relative z-10">
        <img src="../assets/images/profile.png"/>
    </div>
    <div class="relative flex">
        <div class="pt-8 px-7 pb-7 shadow-lg w-56 rounded-2xl simulation-profile bg-simulation-profile opacity-90 shadow-lg">
            <div class="text-base font-bold text-white pb-4">Simulation profile</div>
            <div class="flex flex-col gap-4 text-white">
                <div class="flex justify-between items-center">
                    <div class="flex flex-col">
                        <div class="font-bold text-sm">Character</div>
                        <div class="font-light text-sm">Friendly</div>
                    </div>
                    <div class="flex relative justify-end">
                        <div class="p-3 shadow-lg rounded-2xl bg-white">
                            <img src="../assets/images/smile.png"/>
                        </div>
                        <div class="flex absolute mt-8">
                            <div class="relative flex">
                                <img src="../assets/images/smile.png" class="opacity-70">
                                <div class="absolute w-5 h-5 left-3.5 top-[-8px]">
                                    <img src="../assets/images/smile.png" class="opacity-70">
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div class="flex justify-between items-center">
                    <div class="flex flex-col">
                        <div class="font-bold text-sm">Call type</div>
                        <div class="font-light text-sm">Incoming</div>
                    </div>
                    <div class="p-3 shadow-lg rounded-2xl bg-white">
                        <img src="../assets/images/phone.png"/>
                    </div>
                </div>
            </div>
        </div>
        <div class="absolute opacity-70 right-[-10px] top-[35%]">
            <img src="../assets/images/smile.png"/>  
        </div>
    </div>
  </div>
</template>