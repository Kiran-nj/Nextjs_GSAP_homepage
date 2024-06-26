import gsap from "gsap"
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime' 

export const animatePageIn = () => {
const banner1 = document.getElementById("banner-1")
const banner2 = document.getElementById("banner-2")
const banner3 = document.getElementById("banner-3")
const banner4 = document.getElementById("banner-4")

if (banner1 && banner2 && banner3 && banner4){
    const tl= gsap.timeline()
    tl.set([banner1,banner2,banner3,banner4],{
    yPercent:0,
    }).to([banner1,banner2,banner3,banner4],{
    yPercent:100,
    stagger: 0.2,
    })
}

}

export const animatePageOut = (href:string ,router: AppRouterInstance) => {
    const banner1 = document.getElementById("banner-1")
    const banner2 = document.getElementById("banner-2")
    const banner3 = document.getElementById("banner-3")
    const banner4 = document.getElementById("banner-4")
    
    if (banner1 && banner2 && banner3 && banner4){
        const tl= gsap.timeline()
        tl.set([banner1,banner2,banner3,banner4],{
        yPercent:-100,
        }).to([banner1,banner2,banner3,banner4],{
        yPercent:0,
        stagger: 0.6,
        duration:0.5,
        onComplete: () => {
           router.push(href)
        }
        })
    }
    
    }


