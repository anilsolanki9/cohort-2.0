let card = document.querySelector('.card');
let section1 = document.querySelector('.section1');
let cursor = document.querySelector('#cursor');

const users = [
  {
    image: 'https://i.pinimg.com/1200x/b8/c9/df/b8c9dff3d198c53eb3420e1e442fd757.jpg',
    name: 'Aarav Sharma',
    profession: 'Full-Stack Developer',
    info: 'Builds scalable web apps with clean code and modern development practices.',
    skills: ['JavaScript', 'React', 'Node.js', 'MongoDB', 'Express'],
  },
  {
    image: 'https://i.pinimg.com/736x/20/16/49/201649e881fc863978096303416ec1cd.jpg',
    name: 'Emily Carter',
    profession: 'Frontend Engineer',
    info: 'Focused on intuitive UI, smooth animations, and responsive web design principles.',
    skills: ['HTML', 'CSS', 'JavaScript', 'GSAP', 'Next.js'],
  },
  {
    image: 'https://i.pinimg.com/1200x/e4/82/1d/e4821dcdde4794e00e8d2ffb7908ac84.jpg',
    name: 'Rohan Verma',
    profession: 'Backend Engineer',
    info: 'Specializes in secure server architecture, databases, and scalable backend systems.',
    skills: ['Node.js', 'Python', 'PostgreSQL', 'Docker', 'Redis'],
  },
  {
    image: 'https://i.pinimg.com/736x/ac/c8/69/acc86962d0a75985d83bb5e7510f4d99.jpg',
    name: 'Sophia Martinez',
    profession: 'UI/UX Designer',
    info: 'Creates meaningful digital experiences through thoughtful design and user research.',
    skills: ['Figma', 'Adobe XD', 'Illustrator', 'Wireframing', 'Prototyping'],
  },
  {
    image: 'https://i.pinimg.com/736x/ce/80/2d/ce802dd66525bca2109347ede7f6d1d6.jpg',
    name: 'Shruti Mehta',
    profession: 'Mobile App Developer',
    info: 'Builds high-performance Android and iOS apps with modern cross-platform tools.',
    skills: ['Flutter', 'Dart', 'Kotlin', 'Firebase', 'React Native'],
  },
  {
    image: 'https://i.pinimg.com/736x/aa/87/87/aa87872a33bb8d05cf008b15c73d577d.jpg',
    name: 'Riya Roy',
    profession: 'AI/ML Engineer',
    info: 'Develops intelligent models that deliver real-time insights and predictive results.',
    skills: ['Python', 'TensorFlow', 'Pandas', 'NumPy', 'Scikit-learn'],
  },
  {
    image: 'https://i.pinimg.com/736x/6d/09/54/6d09546bb55c4c82e230098b945de31f.jpg',
    name: 'Saanvi Desai',
    profession: 'Cloud Engineer',
    info: 'Designs cloud-native infrastructures with strong security and automated workflows.',
    skills: ['AWS', 'Terraform', 'Kubernetes', 'Linux', 'CI/CD'],
  },
  {
    image: 'https://i.pinimg.com/736x/ba/99/87/ba9987b1ec34527652b0841f8496ab34.jpg',
    name: 'Jimmy Wilson',
    profession: 'Software Architect',
    info: 'Leads complex system designs ensuring reliability, performance, and maintainability.',
    skills: ['Java', 'Microservices', 'Spring Boot', 'Docker', 'AWS'],
  },
];
let sum = '';
users.forEach(function (val) {
  sum += `<div class="card">
          <img
            src="${val.image}"
            alt=""
          />
          <h2>${val.name}</h2>
          <h3>${val.profession}</h3>
          <p>${val.info}</p>
          <div class="skills">
            <p>${val.skills[0]}</p>
            <p>${val.skills[1]}</p>
            <p>${val.skills[2]}</p>
            <p>${val.skills[3]}</p>
            <p>${val.skills[4]}</p>
            <p>${val.skills[5]}</p>
          </div>
        </div>`;
});

section1.innerHTML = sum;

//full screen mode
document.addEventListener('keydown', e => {
  if (e.key.toLowerCase() === 'f') {
    toggleFullScreen();
  }
});

function toggleFullScreen() {
  if (!document.fullscreenElement) {
    // Enter fullscreen
    document.documentElement.requestFullscreen();
  } else {
    // Exit fullscreen
    document.exitFullscreen();
  }
}

document.body.addEventListener('mousemove', function (dets) {
  cursor.style.left = dets.clientX + 'px';
  cursor.style.top = dets.clientY + 'px';
});
