const animateText = new SplitType('.animate-text');
const tl = gsap.timeline();

tl.from('.container', {duration: .6, opacity: 0, y: 50, ease: 'power3.out'});
tl.from('.picture img', {duration: .6, opacity: 0, scale: 0, ease: 'power3.out'});
tl.from('.category', {duration: .6, opacity: 0, y: 50, ease: 'power3.out'});
tl.from('.char', {duration: .2, opacity: 0, y: 50, stagger: .05, ease: 'power3.out'});
tl.from('.text', {duration: .6, opacity: 0, y: 50, ease: 'power3.out'});
tl.from('.price div', {duration: .6, opacity: 0, y: 50, stagger: .2, ease: 'power3.out'});
tl.from('.btn', {duration: .6, opacity: 0, scale: 0, ease: 'power3.out'});
tl.from('.attribution', {duration: .6, opacity: 0, y: 50, ease: 'power3.out'});