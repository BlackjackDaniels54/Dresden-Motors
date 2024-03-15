(function ($) {
    "use strict";
    //Cars Data

    const CarsContainer = document.querySelector('#deal-cars-container');

    function CarsData () {
        return [
            {
                "imgSrc": "https://www.worldautodubai.ae/wp-content/uploads/2020/07/2020-Toyota-Land-Cruiser-White-Brand-New-C-10481-426x300.jpg",
                "price": "$ 57.766",
                "description": "2020 Toyota Land Cruiser | White | Brand…",
                "year": "2020"
            },
            {
                "imgSrc": "https://www.worldautodubai.ae/wp-content/uploads/2020/07/2015-Mercedes-Benz-CLA-Class-CLA250-Silver-C-1045-1-426x300.jpg",
                "price": "$ 17.170",
                "description": "2015 Mercedes-Benz CLA-Class CLA 250 | Silver |…",
                "year": "2015"
            },
            {
                "imgSrc": "https://www.worldautodubai.ae/wp-content/uploads/2020/07/2010-Toyota-Prado-Black-VXL-with-2020-Body-Kit-C-1001-1-426x300.jpg",
                "price": "$ 24.251",
                "description": "2010 Toyota Prado | Black | VXL with…",
                "year": "2010"
            },
            {
                "imgSrc": "https://www.worldautodubai.ae/wp-content/uploads/2020/07/2020-Toyota-Hilux-SR5-Black-C-1034-2-426x300.jpg",
                "price": "$ 29.155",
                "description": "2020 Toyota Hilux SR5 Black C 1034",
                "year": "2020"
            },
            {
                "imgSrc": "https://www.worldautodubai.ae/wp-content/uploads/2020/07/2018-Toyota-Hiace-White-Gasoline-189482-C-1008-1-426x300.jpg",
                "price": "$ 30.518",
                "description": "2018 Toyota Hiace | White | Diesel New…",
                "year": "2018"
            },
            {
                "imgSrc": "https://www.worldautodubai.ae/wp-content/uploads/2020/07/2014-Land-Rover-Range-Rover-Sport-Supercharged-BURGUNDY-C-1057-1-426x300.jpg",
                "price": "$ 34.070",
                "description": "Used 2014 Land Rover Range Rover Steering side:…",
                "year": "2014"
            },
            {
                "imgSrc": "https://www.worldautodubai.ae/wp-content/uploads/2020/07/2016-Lexus-LX-570s-White-C-1019-1-426x300.jpg",
                "price": "$ 64.030",
                "description": "Steering side: Left hand Color: White Mechanical condition:…",
                "year": "2016"
            },
            {
                "imgSrc": "https://www.worldautodubai.ae/wp-content/uploads/2020/07/Toyota-Prado-2010-TO-2019-FACELIFT-C-1022-1-426x300.jpg",
                "price": "$ 21.800",
                "description": "Used 2010 Toyota Prado to 2019 | Black…",
                "year": "2010"
            },
            {
                "imgSrc": "https://www.worldautodubai.ae/wp-content/uploads/2020/07/2020-Toyota-Hilux-Crew-Cab-TRD-Black-C-1055-1-426x300.jpg",
                "price": "$ 34.070",
                "description": "Steering side: Left hand Color: Black Mechanical condition: Perfect inside and…",
                "year": "2020"
            },
            {
                "imgSrc": "https://www.worldautodubai.ae/wp-content/uploads/2020/07/2014-Lexus-LX-570-Black-C-1059-1-426x300.jpg",
                "price": "$ 43.600",
                "description": "Steering side: Left hand Color: Black Mechanical condition:…",
                "year": "2014"
            }
        ]
        
    }
    
    const data = CarsData();
     CarsContainer.innerHTML = null;
    CarsContainer.innerHTML += `${data.map((car, index) => {
        return `
        <div class="testimonial-item text-center">
            <div class="car-img-container">
                <img class="" src="${car.imgSrc}" >
            </div>
            
            <h5 class="my-3">${car.year}</h5>
            <div class="testimonial-text bg-light text-center p-4">
            <p class="mb-0">${car.description}</p>
            </div>
        </div>
            `
    }).join('')}`


    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    



    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').css('top', '0px');
        } else {
            $('.sticky-top').css('top', '-100px');
        }
    });
    
    // Active Links

    function scrollToSection(event) {
        event.preventDefault();  // Предотвращаем стандартное действие ссылки
        arrOflinks.forEach(link => link.classList.remove('active'));
        event.target.classList.add('active');
        const targetId = event.target.getAttribute('data-scroll-to'); // Получаем ID целевой секции из атрибута href ссылки
        const targetSection = document.querySelector(targetId); // Находим целевую секцию по ID
        const headerHeight = document.querySelector('.navbar').offsetHeight; // Получаем высоту header'а
        const targetOffset = targetSection.offsetTop - headerHeight; // Вычисляем вертикальное смещение до секции с учетом высоты header'а
        window.scrollTo({
            top: targetOffset,
            behavior: 'smooth' // Плавная прокрутка
        });
    }

    // Навешиваем обработчик события на все ссылки в навигации
    const arrOflinks = document.querySelectorAll('[data-scroll-to]');
    console.log(arrOflinks);
    arrOflinks.forEach(link => {
        link.addEventListener('click', scrollToSection);
    });

    // Handle submit 

    let IsDownloaded = false;
    let IsErrorPost = false;

    function ShowToast(message) {
        let ToastBlock = document.getElementById('MainToast');
        const createToast = new bootstrap.Toast(ToastBlock);

        let BODY = ToastBlock.querySelector('.toast-body');

        ['bg-success', 'bg-danger'].forEach(className => {
            ToastBlock.classList.remove(className);
        })

        
        BODY.innerHTML = message;
        !IsErrorPost ? ToastBlock.classList.add('bg-danger') : ToastBlock.classList.add('bg-success');
        createToast.show();
    }

    function ShowSpinner() {
        const loadingBtn = document.querySelector('.loading-spinner-btn'),
              currentBtn = document.querySelector('.submit-modal-dres-form');
        loadingBtn.classList.toggle('InActive');
        currentBtn.classList.toggle('InActive');
    }

    const SubmitBtn = document.querySelector('.submit-dres-form');
    const ModalSubmitBtn = document.querySelector('.submit-modal-dres-form');
    const promoFiles = document.querySelectorAll('.downloadLink');

    


    console.log(IsDownloaded);
    promoFiles.forEach(file => file.addEventListener('click', () => {
        IsDownloaded = true;
        console.log(IsDownloaded);
    }))

    SubmitBtn.addEventListener('click', (event) => {
        event.preventDefault();
        const form = document.querySelector('#main-form');
        if(IsDownloaded) {
            handleSubmit(form);
        }else {
            ShowToast('Please, download your promo coupon!')
        }
    })

    ModalSubmitBtn.addEventListener('click', (event) => {
        event.preventDefault();
        const form = document.querySelector('#modal-form');
        if(IsDownloaded) {
            handleSubmit(form);
        }else {
            ShowToast('Please, download your promo coupon!');
        }
    })

    
    async function handleSubmit(form) {
     ShowSpinner();
      const data = {
            "First name": form.querySelector('input[name="FirstName"]').value,
            "Last name": form.querySelector('input[name="LastName"]').value,
            "Email": form.querySelector('input[name="email"]').value,
            "Phone": form.querySelector('input[name="phone"]').value
      }

      const formData = new FormData();

      for (var key in data) {
        if (data.hasOwnProperty(key)) {
          formData.append(key, data[key]);
        }
      }


      console.log(data);
      console.log(formData);

      fetch("https://formspree.io/f/mdoqdroe", {
        method: "POST",
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
      }).then(response => {
        if (response.ok) {
            IsErrorPost = true;
          ShowToast("Your application has been successfully accepted! You'll be contacted ");
          form.reset()
        } else {
          response.json().then(data => {
            
            if (Object.hasOwn(data, 'errors')) {
                IsErrorPost = false;
              ShowToast(data["errors"].map(error => error["message"]).join(", ")); 
            } else {
                ShowToast("Oops! There was a problem submitting your form"); 
            }
          })
        }
      }).catch(error => {
            ShowToast(error);
      }).finally(res => {
        ShowSpinner();
      });
    }
    
    
    // Dropdown on mouse hover
    const $dropdown = $(".dropdown");
    const $dropdownToggle = $(".dropdown-toggle");
    const $dropdownMenu = $(".dropdown-menu");
    const showClass = "show";
    
    $(window).on("load resize", function() {
        if (this.matchMedia("(min-width: 992px)").matches) {
            $dropdown.hover(
            function() {
                const $this = $(this);
                $this.addClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "true");
                $this.find($dropdownMenu).addClass(showClass);
            },
            function() {
                const $this = $(this);
                $this.removeClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "false");
                $this.find($dropdownMenu).removeClass(showClass);
            }
            );
        } else {
            $dropdown.off("mouseenter mouseleave");
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 100, 'easeInOutExpo');
        return false;
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 3000
    });


    // Date and time picker
    $('.date').datetimepicker({
        format: 'L'
    });
    $('.time').datetimepicker({
        format: 'LT'
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        margin: 25,
        dots: true,
        loop: true,
        nav : false,
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });
    
})(jQuery);








