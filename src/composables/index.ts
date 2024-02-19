import {ref, toValue} from "vue";
import besaThumbnail from '@/assets/images/besa-thumbnail.png'
import portfolioThumbnail from '@/assets/images/portfolio-thumbnail.png'

export const expertiseList = ref([
    {
        key: 'Languages',
        skill: [
            {name: 'HTML', exp: '5 years'},
            {name: 'CSS', exp: '5 years'},
            {name: 'Javascript', exp: '5 years'},
            {name: 'SCSS', exp: '2 years'},
        ]
    },
    {
        key: 'Frameworks',
        skill: [
            {name: 'VueJS', exp: '4 years'},
            {name: 'NuxtJS', exp: '2 months'},
        ]
    },
    {
        key: 'Libraries',
        skill: [
            {name: 'ViewUI', exp: '2 years'},
            {name: 'Vuetify', exp: '4 months'},
            {name: 'ReactJS', exp: '3 months'},
            {name: 'MinimalUI', exp: '3 months'},
        ]
    }
])


export const timelineList = ref([
    {
        time: 'July 2017 - July 2022',
        place: 'HUST University',
        program: 'Global ICT Program',
        description: 'I pursued the advanced Global ICT program at Hanoi University of Science and Technology and graduated with an engineering degree majoring in information technology.'
    },
    {
        time: 'June 2021 - September 2021',
        place: 'MISA JSC',
        program: 'Fullstack Developer Fresher',
        description: 'I participated in MISA\'s summer fresher training program and had the opportunity to experience working in projects such as MISA AMIS, MISA CukCuk, etc.'
    },
    {
        time: 'January 2022 - January 2024',
        place: 'MicroTech Company',
        program: 'Front-end Developer',
        description: 'I work as a Front-end Developer, where I am in charge of interface development for the company\'s products as well as building interfaces for partner companies\' internal systems.'
    }
])

export const projectList = ref([
    {
        title: 'BESA - Online Service Reservation Webapp',
        time: 'January 2023',
        thumbnail: besaThumbnail,
        description: 'Besa.vn is a great choice for anyone looking for beauty and healthcare services. ' +
            'Besa is an online booking site that allows users and service providers ' +
            'to interact and easily exchange information about services and promotions. ' +
            'Therefore, searching and booking on Besa becomes faster and simpler.',
        lib: [
            {name: 'Vue 2', link: 'https://v2.vuejs.org/'},
            {name: 'ViewUI', link: 'https://www.iviewui.com/'},
        ],
        action: [
            {key: 'Demo', link: 'https://besa.vn/', icon: 'mdi-youtube-tv'},
        ]
    },
    {
        title: 'Personal Portfolio',
        time: 'January 2024',
        thumbnail: portfolioThumbnail,
        description: 'A personal portfolio to briefly present my information to recruiter. ' +
            'The website is compilation of academic and professional materials that exemplifies my education, skills, experiences and work ethics. ' +
            'The website is designed by Figma and developed based on VueJS and Vuetify.',
        lib: [
            {name: 'Vue 3', link: 'https://vuejs.org/'},
            {name: 'Vuetify', link: 'https://vuetifyjs.com/en/'},
        ],
        action: [
            {key: 'Demo', link: 'https://phihungtran.vercel.app/', icon: 'mdi-youtube-tv'},
            {key: 'Figma', link: 'https://www.figma.com/file/xsRGt5E1xxziZfQK51WWom/Portfolio?type=design&node-id=30%3A19929&mode=design&t=U7FtyAKMmfUC93J1-1', icon: 'mdi-palette'},
            {key: 'Github', link: 'https://github.com/phihung99nd/portfolio', icon: 'mdi-github'},
        ]
    }
])

export function useLink(url) {
    const link = toValue(url)
    if(link) window.open(link, '_blank')
    else return
}