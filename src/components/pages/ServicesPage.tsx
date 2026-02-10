import React from 'react';
import { Scissors, Palette, Sparkles, Heart, Clock, DollarSign } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { DynamicHero } from '../DynamicHero';
import { Link } from 'react-router-dom';

export function ServicesPage() {
  const { t } = useLanguage();

  const serviceCategories = [
    {
      icon: Scissors,
      title: t('services.hairdressing'),
      description: t('services.hairdressing.desc'),
      image: '/hair1.jpg',
      services: [
        { name: 'Women\'s Haircut', price: 'FCFA 25000-35000', duration: '60 min' },
        { name: 'Men\'s Haircut', price: 'FCFA 5000-15000', duration: '45 min' },
        { name: 'Hair Coloring (Full)', price: 'FCFA 12000-18000', duration: '120 min' },
        { name: 'Highlights/Lowlights', price: 'FCFA 10000-15000', duration: '90 min' },
        { name: 'Blowout & Styling', price: 'FCFA 45000-65000', duration: '45 min' },
        { name: 'Hair Treatment', price: 'FCFA 8500-12500', duration: '60 min' },
        { name: 'Wedding Updo', price: 'FCFA 15000-20000', duration: '90 min' }
      ]
    },
    {
      icon: Palette,
      title: t('services.makeup'),
      description: t('services.makeup.desc'),
      image: '/makeup.jpg',
      services: [
        { name: 'Bridal Makeup', price: 'FCFA 18000-25000', duration: '90 min' },
        { name: 'Special Event Makeup', price: 'FCFA 10000-15000', duration: '60 min' },
        { name: 'Photoshoot Makeup', price: 'FCFA 12000-18000', duration: '75 min' },
        { name: 'Natural Day Look', price: 'FCFA 8500-10500', duration: '45 min' },
        { name: 'Evening Glam', price: 'FCFA 12500-16500', duration: '60 min' },
        { name: 'Makeup Lesson', price: 'FCFA 15500', duration: '90 min' },
        { name: 'Makeup Trial', price: 'FCFA 10000', duration: '60 min' }
      ]
    },
    {
      icon: Sparkles,
      title: t('services.skincare'),
      description: t('services.skincare.desc'),
      image: '/skincare1.jpg',
      services: [
        { name: 'Classic European Facial', price: 'FCFA 9000-12000', duration: '75 min' },
        { name: 'Deep Cleansing Facial', price: 'FCFA 10000-13000', duration: '90 min' },
        { name: 'Anti-Aging Treatment', price: 'FCFA 15000-20000', duration: '90 min' },
        { name: 'Hydrating Facial', price: 'FCFA 8500-11000', duration: '60 min' },
        { name: 'Relaxation Massage', price: 'FCFA 12500-18500', duration: '60-90 min' },
        { name: 'Micro-needling', price: 'FCFA 25500', duration: '75 min' },
        { name: 'LED Light Therapy', price: 'FCFA 8000-10000', duration: '45 min' }
      ]
    },
    {
      icon: Heart,
      title: t('services.nails'),
      description: t('services.nails.desc'),
      image: '/nail.jpg',
      services: [
        { name: 'Classic Manicure', price: 'FCFA 3500-4500', duration: '45 min' },
        { name: 'Gel Manicure', price: 'FCFA 5000-6500', duration: '60 min' },
        { name: 'Classic Pedicure', price: 'FCFA 4500-6000', duration: '60 min' },
        { name: 'Spa Pedicure', price: 'FCFA 7000-9000', duration: '75 min' },
        { name: 'Nail Art (Simple)', price: '+FCFA 1000-2000', duration: '+15 min' },
        { name: 'Nail Art (Complex)', price: '+FCFA 2500-5000', duration: '+30 min' },
        { name: 'Gel Extensions', price: 'FCFA 8000-12000', duration: '90 min' }
      ]
    }
  ];

  const packages = [
    {
      name: 'Bridal Package',
      description: 'Complete bridal beauty package including trial, wedding day hair & makeup',
      price: 'FCFA 55000-75000',
      includes: ['Makeup & Hair Trial', 'Wedding Day Hair Styling', 'Wedding Day Makeup', 'Touch-up Kit']
    },
    {
      name: 'Pamper Day',
      description: 'Full day of relaxation and beauty treatments',
      price: 'FCFA 80000-95000',
      includes: ['European Facial', 'Relaxation Massage', 'Manicure & Pedicure', 'Hair Blowout']
    },
    {
      name: 'Girls Night Out',
      description: 'Perfect for special occasions and celebrations',
      price: 'FCFA 58000-72000',
      includes: ['Event Makeup', 'Hair Styling', 'Gel Manicure', 'Complimentary Champagne']
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <DynamicHero
        title={t('services.title')}
        subtitle={t('services.subtitle')}
        description={t('nav.home') === 'Accueil' 
          ? 'Découvrez notre gamme complète de services de beauté et bien-être conçus pour vous faire paraître et vous sentir au meilleur de votre forme.'
          : 'Discover our comprehensive range of beauty and wellness services designed to make you look and feel your absolute best.'
        }
        backgroundImage="/salon2.jpg"
        ctaText={t('booking.title').replace('Your ', '').replace('Votre ', '')}
        ctaLink="/booking"
        height="h-[70vh] min-h-[500px]"
        overlay="gradient"
      />

      {/* Service Categories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {serviceCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-20">
              {/* Category Header */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
                <div className={categoryIndex % 2 === 0 ? 'order-1' : 'order-2'}>
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-pink-600 rounded-2xl flex items-center justify-center mr-4">
                      <category.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900">
                        {category.title}
                      </h2>
                    </div>
                  </div>
                  <p className="text-lg text-gray-600 leading-relaxed mb-6">
                    {category.description}
                  </p>
                  <Link to="/booking">
                    <Button className="bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white">
                      Book Now
                    </Button>
                  </Link>
                </div>
                
                <div className={categoryIndex % 2 === 0 ? 'order-2' : 'order-1'}>
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-pink-100 to-purple-100 rounded-3xl transform rotate-3"></div>
                    <ImageWithFallback
                      src={category.image}
                      alt={category.title}
                      className="relative z-10 w-full h-80 object-cover rounded-2xl shadow-xl"
                    />
                  </div>
                </div>
              </div>

              {/* Services Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.services.map((service, serviceIndex) => (
                  <Card key={serviceIndex} className="hover:shadow-lg transition-all duration-300 border-0 bg-gradient-to-br from-white to-pink-50">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="font-semibold text-gray-900 flex-1">
                          {service.name}
                        </h3>
                        <Badge variant="secondary" className="bg-pink-100 text-pink-700 ml-2">
                          {service.price}
                        </Badge>
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Clock className="w-4 h-4 mr-2 text-pink-500" />
                        {service.duration}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Special Packages */}
      <section className="py-20 bg-gradient-to-b from-pink-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Special Packages
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Save more with our curated beauty packages designed for special occasions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white border-0">
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl font-bold text-gray-900 mb-2">
                    {pkg.name}
                  </CardTitle>
                  <p className="text-gray-600 mb-4">
                    {pkg.description}
                  </p>
                  <div className="text-3xl font-bold text-pink-600">
                    {pkg.price}
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <ul className="space-y-3 mb-6">
                    {pkg.includes.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center text-gray-700">
                        <div className="w-2 h-2 bg-pink-500 rounded-full mr-3"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link to="/booking">
                    <Button className="w-full bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white">
                      Book Package
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-pink-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Book Your Service?
          </h2>
          <p className="text-xl mb-8 text-pink-100">
            Contact us today to schedule your appointment or consultation. Our team is here to help you look and feel your best.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/booking">
              <Button size="lg" className="bg-white text-pink-600 hover:bg-gray-100 px-8 py-4">
                {t('hero.cta')}
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-pink-600 px-8 py-4">
                {t('nav.contact')}
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}