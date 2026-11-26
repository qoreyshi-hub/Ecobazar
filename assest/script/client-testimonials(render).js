import { clientTestimonials } from "../data/client-testimonials.js";

const clientTestimonialsContainer = document.querySelector(
  ".client-testimonials__container",
);

clientTestimonials.forEach((opinion) => {
  clientTestimonialsContainer.innerHTML += `
    <div class="swiper-slide bg-white rounded-lg p-3 md:p-6">
                <svg class="w-8 h-[26px] text-soft-primary">
                  <use href="#double-comma"></use>
                </svg>
                <p
                  class="text-sm text-gray-7 leading-[150%] mt-3 md:mt-4 line-clamp-4">${opinion.description}</p>
                <div class="flex items-center justify-between mt-4 md:mt-6">
                  <div class="flex items-center gap-3">
                    <div
                      class="w-10 md:w-[56px] h-10 md:h-[56px] rounded-full overflow-hidden"
                    >
                      <img
                        src="${opinion.profile}"
                        alt="${opinion.alt}"
                        class="w-full h-full object-cover"
                      />
                    </div>
                    <div class="flex flex-col child:leading-[150%]">
                      <h6
                        class="font-medium text-sm md:text-base text-gray-9 line-clamp-1">${opinion.name}</h6>
                      <p class="text-xs md:text-sm text-gray-4">${opinion.role}</p>
                    </div>
                  </div>
                  <div class="flex items-center gap-0.5 flex-wrap">
                    <svg
                      class="max-w-3 md:max-w-4 max-h-3 md:max-h-4 text-warning"
                      slot="star"
                    >
                      <use href="#star"></use>
                    </svg>
                    <svg
                      class="max-w-3 md:max-w-4 max-h-3 md:max-h-4 text-warning"
                      slot="star"
                    >
                      <use href="#star"></use>
                    </svg>
                    <svg
                      class="max-w-3 md:max-w-4 max-h-3 md:max-h-4 text-warning"
                      slot="star"
                    >
                      <use href="#star"></use>
                    </svg>
                    <svg
                      class="max-w-3 md:max-w-4 max-h-3 md:max-h-4 text-warning"
                      slot="star"
                    >
                      <use href="#star"></use>
                    </svg>
                    <svg
                      class="max-w-3 md:max-w-4 max-h-3 md:max-h-4 text-warning"
                      slot="star"
                    >
                      <use href="#star"></use>
                    </svg>
                  </div>
                </div>
              </div>
    `;
});
// counfig slider
new Swiper(".swiperClient", {
  slidesPerView: 1.1,
  spaceBetween: 16,
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiperClientNextBtn",
    prevEl: ".swiperClientPrevBtn",
  },
  breakpoints: {
    580: {
      slidesPerView: 1.8,
    },
    724: {
      slidesPerView: 2.3,
      spaceBetween: 24,
    },

    1400: {
      slidesPerView: 3,
    },
  },
});
