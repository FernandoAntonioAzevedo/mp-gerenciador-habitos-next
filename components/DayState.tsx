import Image from "next/image";

function DayState({ day } : { day: boolean | undefined }) {

    let image: [string, string, number?] = ["/bolinha.svg", "bolinha", 12];

    if (day === true) image = ["/check.svg", "check", 24];
    if (day === false) image = ["/xVermelho.svg", "xVermelho", 24];


    const [src, alt, size] = image;

    return (
        <div className="flex items-center justify-center  h-9">
            <Image 
                src={src} 
                width={size} 
                height={size} 
                alt={alt}
            />
        </div>
    );
}

export default DayState;