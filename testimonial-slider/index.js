const cardDiv = document.querySelector('.card');
const imgTag = document.querySelector('img');
const pTag = document.querySelector('p');
const h1Tag = document.querySelector('h1');


const testimonials = [
    {
        img: './img1.jpg',
        p: 'Absolutely blown away by the attention to detail! Everything was smooth, fast, and professional. Can’t recommend enough!',
        h1: 'Emma T., Marketing Lead'
    },
    {
        img: './img2.jpg',
        p: 'At first I wasn’t sure, but this turned out to be one of the best decisions I’ve made. Everything just works — and looks great doing it.',
        h1: 'Daniel R., Startup Founder'
    },
    {
        img: './img3.jpg',
        p: 'I loved how intuitive and clean the experience was. It felt like it was built just for me!',
        h1: 'Priya M., UX Designer'
    },
    {
        img: './img4.jpg',
        p: 'Reliable, responsive, and ridiculously efficient. If you’re thinking about it — stop thinking and go for it.',
        h1: 'Liam W., Data Analyst'
    }
]

let idx = 0;

updateTestimonial();
function updateTestimonial() {
    const { img, p, h1 } = testimonials[idx];
    imgTag.src = img;
    pTag.innerText = p;
    h1Tag.innerText = h1;
    idx++;
    if (idx === testimonials.length) {
      idx = 0;
    }
    setTimeout(() => {
      updateTestimonial();
    }, 5000);
  }