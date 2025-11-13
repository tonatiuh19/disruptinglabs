import { 
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

interface Brand {
  name: string;
  logo: string;
  website?: string;
}

interface BrandsCarouselProps {
  brands?: Brand[];
  title?: string;
  autoplay?: boolean;
  className?: string;
}

const defaultBrands: Brand[] = [
  {
    name: "TechCorp",
    logo: "https://via.placeholder.com/150x80/8B5CF6/FFFFFF?text=TechCorp",
    website: "https://techcorp.com"
  },
  {
    name: "InnovateLabs",
    logo: "https://via.placeholder.com/150x80/06B6D4/FFFFFF?text=InnovateLabs",
    website: "https://innovatelabs.com"
  },
  {
    name: "FutureScale",
    logo: "https://via.placeholder.com/150x80/EC4899/FFFFFF?text=FutureScale",
    website: "https://futurescale.com"
  },
  {
    name: "DataDrive",
    logo: "https://via.placeholder.com/150x80/10B981/FFFFFF?text=DataDrive",
    website: "https://datadrive.com"
  },
  {
    name: "CloudForge",
    logo: "https://via.placeholder.com/150x80/F59E0B/FFFFFF?text=CloudForge",
    website: "https://cloudforge.com"
  },
  {
    name: "QuantumSoft",
    logo: "https://via.placeholder.com/150x80/EF4444/FFFFFF?text=QuantumSoft",
    website: "https://quantumsoft.com"
  },
  {
    name: "NexusAI",
    logo: "https://via.placeholder.com/150x80/7C3AED/FFFFFF?text=NexusAI",
    website: "https://nexusai.com"
  },
  {
    name: "CyberVault",
    logo: "https://via.placeholder.com/150x80/0EA5E9/FFFFFF?text=CyberVault",
    website: "https://cybervault.com"
  }
];

export default function BrandsCarousel({ 
  brands = defaultBrands, 
  title = "Trusted by Industry Leaders",
  autoplay = true,
  className = ""
}: BrandsCarouselProps) {
  return (
    <section className={`py-20 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            {title}
          </h2>
          <p className="text-xl text-disrupting-gray max-w-2xl mx-auto">
            We've partnered with innovative companies across industries to deliver transformative digital solutions.
          </p>
        </div>

        {/* Carousel */}
        <Carousel
          opts={{
            align: "start",
            loop: true,
            ...(autoplay && { 
              active: true,
            })
          }}
          className="w-full max-w-6xl mx-auto"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {brands.map((brand, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 basis-1/2 md:basis-1/3 lg:basis-1/4">
                <Card className="bg-white/10 backdrop-blur-sm border-disrupting-gray/20 hover:bg-white/20 transition-all duration-300 group">
                  <CardContent className="flex aspect-[3/2] items-center justify-center p-6">
                    <div className="relative w-full h-full flex items-center justify-center">
                      {brand.website ? (
                        <a
                          href={brand.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full h-full flex items-center justify-center group-hover:scale-105 transition-transform duration-300"
                        >
                          <img
                            src={brand.logo}
                            alt={`${brand.name} logo`}
                            className="max-w-full max-h-full object-contain filter brightness-100 hover:brightness-110 transition-all duration-300"
                          />
                        </a>
                      ) : (
                        <img
                          src={brand.logo}
                          alt={`${brand.name} logo`}
                          className="max-w-full max-h-full object-contain filter brightness-100 group-hover:brightness-110 transition-all duration-300"
                        />
                      )}
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        {/* Auto-scroll indicator */}
        {autoplay && (
          <div className="flex items-center justify-center mt-8 text-disrupting-gray/60">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-disrupting-purple rounded-full animate-pulse"></div>
              <span className="text-sm">Auto-scrolling</span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export type { Brand, BrandsCarouselProps };