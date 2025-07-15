import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Calendar, BookOpen, Brain, Users, Search, Clock, FileText, Award, Target } from "lucide-react";
import { Link } from "react-router-dom";

const lawUnits = [
  {
    code: "CLS 300",
    title: "Law of International Institutions",
    description: "Study of international organizations and their legal frameworks",
    color: "bg-blue-100 text-blue-800",
    progress: 75
  },
  {
    code: "CLS 301", 
    title: "Extractive Resources Law",
    description: "Legal frameworks governing natural resource extraction",
    color: "bg-green-100 text-green-800",
    progress: 60
  },
  {
    code: "CLS 302",
    title: "Public International Law", 
    description: "Principles and sources of international law",
    color: "bg-purple-100 text-purple-800",
    progress: 85
  },
  {
    code: "CLS 303",
    title: "East African Community Law",
    description: "Regional integration and EAC legal framework",
    color: "bg-orange-100 text-orange-800",
    progress: 45
  },
  {
    code: "CLS 305",
    title: "Banking Law",
    description: "Financial regulations and banking legislation",
    color: "bg-indigo-100 text-indigo-800",
    progress: 70
  },
  {
    code: "CLS 306", 
    title: "Consumer Protection Law",
    description: "Rights and protections for consumers in commercial law",
    color: "bg-pink-100 text-pink-800",
    progress: 55
  }
];

const quickActions = [
  { icon: Calendar, label: "Study Planner", path: "/planner", color: "text-primary" },
  { icon: Brain, label: "Quiz Center", path: "/quiz", color: "text-accent" },
  { icon: FileText, label: "Past Papers", path: "/papers", color: "text-blue-600" },
  { icon: Users, label: "Discussion Forum", path: "/forum", color: "text-purple-600" }
];

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-foreground">Law Hub</h1>
              <p className="text-sm text-muted-foreground">3rd Year, Semester 1</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Search across all units..."
                className="pl-10 w-80"
              />
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-2">Welcome back!</h2>
          <p className="text-muted-foreground text-lg">
            Ready to continue your law studies? Let's make this semester count.
          </p>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {quickActions.map((action, index) => (
            <Link to={action.path} key={index}>
              <Card className="hover:shadow-md transition-shadow cursor-pointer border-2 hover:border-primary/20">
                <CardContent className="p-6 text-center">
                  <action.icon className={`w-8 h-8 mx-auto mb-3 ${action.color}`} />
                  <h3 className="font-semibold">{action.label}</h3>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* Study Units Grid */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold">Your Units</h3>
            <Badge variant="secondary" className="text-sm">
              6 Units This Semester
            </Badge>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {lawUnits.map((unit, index) => (
              <Link to={`/unit/${unit.code.toLowerCase().replace(' ', '-')}`} key={index}>
                <Card className="hover:shadow-lg transition-all duration-200 cursor-pointer h-full border-2 hover:border-primary/20">
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between">
                      <Badge className={unit.color} variant="secondary">
                        {unit.code}
                      </Badge>
                      <div className="text-right">
                        <span className="text-sm text-muted-foreground">Progress</span>
                        <div className="text-xl font-bold text-primary">{unit.progress}%</div>
                      </div>
                    </div>
                    <CardTitle className="text-lg leading-tight">{unit.title}</CardTitle>
                    <CardDescription className="text-sm">
                      {unit.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="pt-0">
                    <div className="w-full bg-muted rounded-full h-2 mb-4">
                      <div 
                        className="bg-primary h-2 rounded-full transition-all duration-300"
                        style={{ width: `${unit.progress}%` }}
                      />
                    </div>
                    
                    <div className="flex justify-between items-center text-sm text-muted-foreground">
                      <span className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        Last studied 2 days ago
                      </span>
                      <span className="flex items-center">
                        <Target className="w-4 h-4 mr-1" />
                        {Math.floor(Math.random() * 20 + 10)} topics
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Award className="w-5 h-5 mr-2" />
              Recent Activity
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 p-3 bg-muted/50 rounded-lg">
                <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                  <Brain className="w-4 h-4 text-accent-foreground" />
                </div>
                <div className="flex-1">
                  <p className="font-medium">Completed Quiz: Public International Law</p>
                  <p className="text-sm text-muted-foreground">Score: 85% • 2 hours ago</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 p-3 bg-muted/50 rounded-lg">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <FileText className="w-4 h-4 text-primary-foreground" />
                </div>
                <div className="flex-1">
                  <p className="font-medium">Downloaded: Banking Law Notes</p>
                  <p className="text-sm text-muted-foreground">Chapter 3: Financial Regulations • Yesterday</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 p-3 bg-muted/50 rounded-lg">
                <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                  <Users className="w-4 h-4 text-white" />
                </div>
                <div className="flex-1">
                  <p className="font-medium">Joined Discussion: EAC Legal Framework</p>
                  <p className="text-sm text-muted-foreground">3 new replies • 2 days ago</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Dashboard;