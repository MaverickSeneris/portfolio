import React from 'react'
import resumeFile from '../../../../assets/Resume/Resume.pdf'

export default function FooterLinks() {
    const footerLinks = [
        {
            name: "Github",
            href: "https://github.com/MaverickSeneris"
        },
        {
            name: "LinkedIn",
            href: "https://www.linkedin.com/in/maverick-seneris-50800b275/"
        },
        {
            name: "Mail",
            href: "mailto:maverickseneris@proton.me"
        },
        {
            name: "Resume",
            href: resumeFile
        }
    ]
  return (
    <div className="footer-links">
        {footerLinks.map((link)=> {
            return (
                <a key={link.name} href={link.href} className="
                footer-social-link 
                link-hover-effect 
                link-hover-effect--white"
                target="_blank">{link.name}</a> 
            )
        })}
</div>
  )
}
