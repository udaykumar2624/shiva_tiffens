import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/Button";
import { Card, CardContent } from "../components/ui/Card";
import { Badge } from "../components/ui/Badge";
import { ArrowRight, Clock, Phone, Utensils, Heart, Award, Users, Star, MapPin } from "lucide-react";

export default function Home() {
  const highlights = [
    { icon: Clock, title: "Fresh Every Morning", description: "Made fresh daily from 6:00 AM", color: "text-blue-600" },
    { icon: Heart, title: "Traditional Recipes", description: "Authentic South Indian flavors", color: "text-red-500" },
    { icon: Award, title: "Quality Assured", description: "Premium ingredients, perfect taste", color: "text-yellow-500" },
    { icon: Users, title: "Family Owned", description: "Serving the community since 1995", color: "text-green-600" }
  ];

  const testimonials = [
    { name: "Rajesh Kumar", text: "Best idli and dosa in the area! Fresh and tasty every time.", rating: 5 },
    { name: "Priya Sharma", text: "Amazing sambar and chutneys. Feels like homemade food.", rating: 5 },
    { name: "Amit Patel", text: "Quick delivery and hot food. My go-to place for breakfast!", rating: 5 }
  ];

  return (
    <div>
      <section className="relative overflow-hidden rounded-lg">
        <div className="px-6 py-12 text-center bg-gradient-to-r from-orange-600 to-yellow-600 text-white rounded-lg">
          <Badge className="mb-4 bg-white/20 text-white border-white/30 text-sm px-4 py-2">🏆 Bhatambra's Favorite Breakfast Spot</Badge>
          <h1 className="text-4xl font-bold mb-4">Welcome to Shiva Tiffin Center</h1>
          <p className="text-lg mb-6">Authentic South Indian breakfast delivered fresh to your doorstep</p>
          <div className="flex gap-4 justify-center">
            <Link to="/menu"><Button className="bg-white text-orange-600">Order Now <ArrowRight className="ml-2" /></Button></Link>
            <div className="flex items-center gap-2 text-white/90"><Phone className="w-5 h-5" /><span className="font-semibold">8125236461</span></div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
          {highlights.map((h, i) => (
            <Card key={i} className="p-4">
              <CardContent className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-orange-100 flex items-center justify-center">
                  <h4 className="font-bold">{h.title.split(' ')[0]}</h4>
                </div>
                <h3 className="font-bold">{h.title}</h3>
                <p className="text-sm text-gray-600">{h.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="py-12 bg-white/50 rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4">Our Signature Dishes</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="overflow-hidden">
            <div className="h-48 bg-gray-100">
              <img src="https://images.unsplash.com/photo-1604908177522-7f2d8a7f3a48?q=80&w=800&auto=format&fit=crop" alt="Dosa" className="w-full h-full object-cover" />
            </div>
            <CardContent>
              <h3 className="text-xl font-bold">Special Dosa</h3>
              <p className="text-gray-600">Crispy dosa served with sambhar and chutneys</p>
              <div className="flex justify-between items-center mt-4">
                <div className="text-2xl font-bold text-orange-600">₹40</div>
                <Button className="bg-orange-500 text-white">Order Now</Button>
              </div>
            </CardContent>
          </Card>
          <Card className="overflow-hidden">
            <div className="h-48 bg-gray-100">
              <img src="https://images.unsplash.com/photo-1586190848861-99aa4a171e90?q=80&w=800&auto=format&fit=crop" alt="Idli" className="w-full h-full object-cover" />
            </div>
            <CardContent>
              <h3 className="text-xl font-bold">Idli Plate</h3>
              <p className="text-gray-600">Soft, fluffy idlis with sambar</p>
              <div className="flex justify-between items-center mt-4">
                <div className="text-2xl font-bold text-orange-600">₹30</div>
                <Button className="bg-orange-500 text-white">Order Now</Button>
              </div>
            </CardContent>
          </Card>
          <Card className="overflow-hidden">
            <div className="h-48 bg-gray-100">
              <img src="https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=800&auto=format&fit=crop" alt="Uttapam" className="w-full h-full object-cover" />
            </div>
            <CardContent>
              <h3 className="text-xl font-bold">Uttapam</h3>
              <p className="text-gray-600">Thick dosa topped with fresh vegetables</p>
              <div className="flex justify-between items-center mt-4">
                <div className="text-2xl font-bold text-orange-600">₹45</div>
                <Button className="bg-orange-500 text-white">Order Now</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
