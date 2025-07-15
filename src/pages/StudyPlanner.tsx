import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowLeft, Calendar as CalendarIcon, Clock, Plus, BookOpen, Target } from "lucide-react";
import { Link } from "react-router-dom";

const StudyPlanner = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [tasks] = useState([
    {
      id: 1,
      title: "Review International Law Treaties",
      unit: "CLS 300",
      date: "2024-03-15",
      time: "09:00",
      duration: "2 hours",
      type: "Study Session",
      completed: false
    },
    {
      id: 2,
      title: "Banking Law Quiz",
      unit: "CLS 305",
      date: "2024-03-15",
      time: "14:00",
      duration: "1 hour",
      type: "Quiz",
      completed: true
    },
    {
      id: 3,
      title: "Consumer Protection Case Study",
      unit: "CLS 306",
      date: "2024-03-16",
      time: "10:00",
      duration: "3 hours",
      type: "Assignment",
      completed: false
    }
  ]);

  const upcomingTasks = tasks.filter(task => !task.completed);
  const completedTasks = tasks.filter(task => task.completed);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link to="/">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Dashboard
              </Button>
            </Link>
            <div className="h-6 border-l border-border" />
            <div>
              <h1 className="text-2xl font-bold">Study Planner</h1>
              <p className="text-muted-foreground">Organize your study schedule effectively</p>
            </div>
          </div>
          
          <Button>
            <Plus className="w-4 h-4 mr-2" />
            Add Study Session
          </Button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Calendar Section */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <CalendarIcon className="w-5 h-5 mr-2" />
                  Study Calendar
                </CardTitle>
                <CardDescription>
                  Select a date to view or add study sessions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Calendar
                  mode="single"
                  selected={selectedDate}
                  onSelect={setSelectedDate}
                  className="rounded-md border"
                />
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle className="text-lg">This Week</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Study Hours</span>
                  <Badge variant="secondary">18h</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Sessions Completed</span>
                  <Badge variant="secondary">12/15</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Units Covered</span>
                  <Badge variant="secondary">5/6</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Streak</span>
                  <Badge className="bg-accent">7 days</Badge>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Add New Task Form */}
            <Card>
              <CardHeader>
                <CardTitle>Schedule Study Session</CardTitle>
                <CardDescription>
                  Plan your next study session or exam
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="task-title">Task Title</Label>
                    <Input id="task-title" placeholder="e.g., Review Contract Law" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="unit-select">Unit</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select unit" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="cls-300">CLS 300 - International Institutions</SelectItem>
                        <SelectItem value="cls-301">CLS 301 - Extractive Resources Law</SelectItem>
                        <SelectItem value="cls-302">CLS 302 - Public International Law</SelectItem>
                        <SelectItem value="cls-303">CLS 303 - East African Community Law</SelectItem>
                        <SelectItem value="cls-305">CLS 305 - Banking Law</SelectItem>
                        <SelectItem value="cls-306">CLS 306 - Consumer Protection Law</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="task-time">Time</Label>
                    <Input id="task-time" type="time" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="task-duration">Duration</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select duration" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="30">30 minutes</SelectItem>
                        <SelectItem value="60">1 hour</SelectItem>
                        <SelectItem value="90">1.5 hours</SelectItem>
                        <SelectItem value="120">2 hours</SelectItem>
                        <SelectItem value="180">3 hours</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <Button className="w-full">
                  <Plus className="w-4 h-4 mr-2" />
                  Add to Schedule
                </Button>
              </CardContent>
            </Card>

            {/* Upcoming Tasks */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Clock className="w-5 h-5 mr-2" />
                  Upcoming Sessions
                </CardTitle>
                <CardDescription>
                  Your scheduled study sessions and exams
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {upcomingTasks.map((task) => (
                    <div key={task.id} className="flex items-center justify-between p-4 border border-border rounded-lg">
                      <div className="flex items-center space-x-4">
                        <div className="w-2 h-8 bg-primary rounded-full" />
                        <div>
                          <h4 className="font-medium">{task.title}</h4>
                          <div className="flex items-center space-x-4 text-sm text-muted-foreground mt-1">
                            <span className="flex items-center">
                              <BookOpen className="w-4 h-4 mr-1" />
                              {task.unit}
                            </span>
                            <span className="flex items-center">
                              <CalendarIcon className="w-4 h-4 mr-1" />
                              {task.date}
                            </span>
                            <span className="flex items-center">
                              <Clock className="w-4 h-4 mr-1" />
                              {task.time}
                            </span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <Badge variant="outline">{task.type}</Badge>
                        <Badge variant="secondary">{task.duration}</Badge>
                        <Button variant="outline" size="sm">
                          <Target className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Completed Tasks */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Target className="w-5 h-5 mr-2" />
                  Completed Sessions
                </CardTitle>
                <CardDescription>
                  Well done! Keep up the great work
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {completedTasks.map((task) => (
                    <div key={task.id} className="flex items-center justify-between p-4 border border-border rounded-lg opacity-75">
                      <div className="flex items-center space-x-4">
                        <div className="w-2 h-8 bg-accent rounded-full" />
                        <div>
                          <h4 className="font-medium line-through">{task.title}</h4>
                          <div className="flex items-center space-x-4 text-sm text-muted-foreground mt-1">
                            <span className="flex items-center">
                              <BookOpen className="w-4 h-4 mr-1" />
                              {task.unit}
                            </span>
                            <span className="flex items-center">
                              <CalendarIcon className="w-4 h-4 mr-1" />
                              {task.date}
                            </span>
                          </div>
                        </div>
                      </div>
                      
                      <Badge className="bg-accent">Completed</Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default StudyPlanner;