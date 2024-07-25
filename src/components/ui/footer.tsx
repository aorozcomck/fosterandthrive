import Image from 'next/image';

interface FooterItem {
    Name: string;
    Url: string;
}

interface SocialMediaItem {
    Name: string;
    Url: string;
    ImageUrl: string;
}

interface FooterProps {
    MenuItems: FooterItem[];
    SocialMediaItems: SocialMediaItem[];
    PageInfo: FooterItem[];
}

const Footer = (props: FooterProps) => {
    return (
        <footer id="footer" role="contentinfo" className="bg-mcklightyellow lg:mb-0 mb-16">
            <div className="mt-0 lg:px-72 px-5 py-8 lg:py-9">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div className="lg:my-0 text-gtl-med lg:border-r lg:border-b-0 border-b-2 lg:pb-0 pb-6 lg:mb-0 mb-6 border-mcknormalgrey">
                        <ul className="mb-0 list-none lg:py-0 px-0">
                            <li className="lg:my-0 grid">
                                {props.MenuItems.map((footerItem: FooterItem, index: number) => (
                                    <a
                                        id={`fotter-block-01-${index + 1}`}
                                        href={footerItem.Url}
                                        key={index}
                                        className="text-sofia-reg text-lg text-mcknormalgrey lg:my-2 mb-3 w-fit">
                                        {footerItem.Name}
                                    </a>
                                ))}
                            </li>
                            <li className="lg:my-2 flex">
                                {props.SocialMediaItems.map((socialItem: SocialMediaItem, index: number) => (
                                    <a
                                        id={`sl-00${index}`}
                                        href={socialItem.Url}
                                        target="_blank"
                                        aria-hidden={false}
                                        tabIndex={0}
                                        key={index}
                                        className='text-sofia-reg text-lg text-mcknormalgrey w-6 h-6 mr-3'>
                                        <Image
                                            src={socialItem.ImageUrl}
                                            alt={socialItem.Name}
                                            className='mx-auto w-fit max-w-fit'
                                            width={24}
                                            height={24}
                                            priority
                                        />
                                    </a>
                                ))}
                            </li>
                        </ul>
                    </div>

                    <div className="lg:py-0 lg:pl-6 pl-0">
                        <ul className="mb-0 list-none">
                            <li className="lg:my-0 grid">
                                {props.PageInfo.map((pageInfo: FooterItem, index: number) => (
                                    <a
                                        id={`footer-block-02-${index}`}
                                        href={pageInfo.Url}
                                        target='_blank'
                                        aria-hidden={false}
                                        key={index}
                                        className='text-sofia-reg text-lg text-mcknormalgrey lg:py-2 mb-3 w-fit'
                                    >
                                        {pageInfo.Name}
                                    </a>
                                ))}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;