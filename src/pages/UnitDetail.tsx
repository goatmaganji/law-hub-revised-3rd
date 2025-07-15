import { useParams, Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { 
  ArrowLeft, BookOpen, FileText, Download, Brain, 
  Clock, Users, Scale, Gavel
} from "lucide-react";

const unitData = {
  "cls-300": {
    code: "CLS 300",
    title: "Law of International Institutions",
    description: "Study of international organizations and their legal frameworks",
    progress: 75,
    topics: [
      "United Nations System", "International Court of Justice", "World Trade Organization",
      "Regional Organizations", "Treaty Making Process", "Dispute Resolution Mechanisms"
    ],
    keyTerms: [
      { term: "Jus Cogens", definition: "Peremptory norms of international law" },
      { term: "Ultra Vires", definition: "Beyond the powers" },
      { term: "Pacta Sunt Servanda", definition: "Agreements must be kept" }
    ],
    caseLaw: [
      { case: "ICJ Advisory Opinion on Reparations", year: "1949", importance: "High" },
      { case: "Nuclear Tests Case", year: "1974", importance: "Medium" },
      { case: "Nottebohm Case", year: "1955", importance: "High" }
    ]
  },
  "cls-301": {
    code: "CLS 301", 
    title: "Extractive Resources Law",
    description: "Legal frameworks governing natural resource extraction",
    progress: 60,
    topics: [
      "Mining Rights and Licensing", "Environmental Compliance", "Community Rights",
      "Petroleum Law", "Revenue Sharing", "International Investment Treaties"
    ],
    keyTerms: [
      { term: "Concession Agreement", definition: "Contract granting extraction rights" },
      { term: "Royalty", definition: "Payment to resource owner" },
      { term: "Environmental Impact Assessment", definition: "Study of environmental effects" }
    ],
    caseLaw: [
      { case: "Barrick Gold v. Tanzania", year: "2018", importance: "High" },
      { case: "Acacia Mining Dispute", year: "2017", importance: "Medium" }
    ]
  }
};

const UnitDetail = () => {
  const { unitId } = useParams();
  const unit = unitData[unitId as keyof typeof unitData];

  if (!unit) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Unit Not Found</h1>
          <Link to="/">
            <Button>Return to Dashboard</Button>
          </Link>
        </div>
      </div>
    );
  }

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
              <div className="flex items-center space-x-2">
                <Badge variant="secondary">{unit.code}</Badge>
                <h1 className="text-xl font-bold">{unit.title}</h1>
              </div>
              <p className="text-sm text-muted-foreground mt-1">{unit.description}</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="text-right">
              <p className="text-sm text-muted-foreground">Progress</p>
              <p className="text-lg font-bold text-primary">{unit.progress}%</p>
            </div>
            <Progress value={unit.progress} className="w-24" />
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="topics" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="topics">Topics</TabsTrigger>
                <TabsTrigger value="cases">Case Law</TabsTrigger>
                <TabsTrigger value="terms">Key Terms</TabsTrigger>
                <TabsTrigger value="notes">Notes</TabsTrigger>
              </TabsList>
              
              <TabsContent value="topics" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <BookOpen className="w-5 h-5 mr-2" />
                      Course Topics
                    </CardTitle>
                    <CardDescription>
                      Click on any topic to access detailed study materials
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {unit.topics.map((topic, index) => (
                        <Card key={index} className="hover:shadow-md transition-shadow cursor-pointer">
                          <CardContent className="p-4">
                            <div className="flex items-center justify-between">
                              <h4 className="font-medium">{topic}</h4>
                              <Badge variant="outline">
                                {index + 1}/{unit.topics.length}
                              </Badge>
                            </div>
                            <p className="text-sm text-muted-foreground mt-2">
                              Study materials, readings, and exercises
                            </p>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="cases" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Gavel className="w-5 h-5 mr-2" />
                      Important Case Law
                    </CardTitle>
                    <CardDescription>
                      Key cases that shaped this area of law
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {unit.caseLaw.map((caseItem, index) => (
                        <div key={index} className="border border-border rounded-lg p-4">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="font-semibold">{caseItem.case}</h4>
                            <div className="flex items-center space-x-2">
                              <Badge variant={caseItem.importance === 'High' ? 'destructive' : 'secondary'}>
                                {caseItem.importance}
                              </Badge>
                              <span className="text-sm text-muted-foreground">{caseItem.year}</span>
                            </div>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            Click to read full case summary and legal principles
                          </p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="terms" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Scale className="w-5 h-5 mr-2" />
                      Key Legal Terms
                    </CardTitle>
                    <CardDescription>
                      Essential terminology for this unit
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {unit.keyTerms.map((term, index) => (
                        <div key={index} className="border border-border rounded-lg p-4">
                          <h4 className="font-semibold text-primary mb-2">{term.term}</h4>
                          <p className="text-muted-foreground">{term.definition}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="notes" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <FileText className="w-5 h-5 mr-2" />
                      Study Notes & Materials
                    </CardTitle>
                    <CardDescription>
                      Downloadable resources for this unit
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-4 border border-border rounded-lg">
                        <div>
                          <h4 className="font-medium">Complete Course Notes</h4>
                          <p className="text-sm text-muted-foreground">PDF • 156 pages • Updated last week</p>
                        </div>
                        <Button variant="outline" size="sm">
                          <Download className="w-4 h-4 mr-2" />
                          Download
                        </Button>
                      </div>
                      
                      <div className="flex items-center justify-between p-4 border border-border rounded-lg">
                        <div>
                          <h4 className="font-medium">Past Examination Papers</h4>
                          <p className="text-sm text-muted-foreground">PDF • 5 papers • 2019-2023</p>
                        </div>
                        <Button variant="outline" size="sm">
                          <Download className="w-4 h-4 mr-2" />
                          Download
                        </Button>
                      </div>
                      
                      <div className="flex items-center justify-between p-4 border border-border rounded-lg">
                        <div>
                          <h4 className="font-medium">Quick Reference Guide</h4>
                          <p className="text-sm text-muted-foreground">PDF • 12 pages • Key concepts summary</p>
                        </div>
                        <Button variant="outline" size="sm">
                          <Download className="w-4 h-4 mr-2" />
                          Download
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Study Tools</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full justify-start" variant="outline">
                  <Brain className="w-4 h-4 mr-2" />
                  Take Practice Quiz
                </Button>
                <Button className="w-full justify-start" variant="outline">
                  <Clock className="w-4 h-4 mr-2" />
                  Add to Study Plan
                </Button>
                <Button className="w-full justify-start" variant="outline">
                  <Users className="w-4 h-4 mr-2" />
                  Join Discussion
                </Button>
              </CardContent>
            </Card>

            {/* Study Statistics */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Your Progress</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Topics Completed</span>
                    <span>4/6</span>
                  </div>
                  <Progress value={67} />
                </div>
                
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Quiz Average</span>
                    <span>82%</span>
                  </div>
                  <Progress value={82} />
                </div>
                
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Study Hours</span>
                    <span>24h</span>
                  </div>
                  <Progress value={60} />
                </div>
              </CardContent>
            </Card>

            {/* Upcoming Deadlines */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Upcoming</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="text-sm">
                  <p className="font-medium">Mid-term Exam</p>
                  <p className="text-muted-foreground">March 15, 2024</p>
                </div>
                <div className="text-sm">
                  <p className="font-medium">Research Paper Due</p>
                  <p className="text-muted-foreground">March 22, 2024</p>
                </div>
                <div className="text-sm">
                  <p className="font-medium">Group Presentation</p>
                  <p className="text-muted-foreground">April 1, 2024</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default UnitDetail;