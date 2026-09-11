import { useRoute } from '@/lib/router';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { FloatingButtons } from '@/components/layout/FloatingButtons';
import { HomePage } from '@/pages/HomePage';
import { AboutPage } from '@/pages/AboutPage';
import { ServicesPage } from '@/pages/ServicesPage';
import { ProjectsPage } from '@/pages/ProjectsPage';
import { ContactPage } from '@/pages/ContactPage';

function App() {
  const [path, navigate] = useRoute();

  const renderPage = () => {
    switch (path) {
      case '/tentang':
        return <AboutPage onNavigate={navigate} />;
      case '/layanan':
        return <ServicesPage onNavigate={navigate} />;
      case '/proyek':
        return <ProjectsPage onNavigate={navigate} />;
      case '/kontak':
        return <ContactPage />;
      default:
        return <HomePage onNavigate={navigate} />;
    }
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar currentPath={path} onNavigate={navigate} />
      <div className="flex-1">{renderPage()}</div>
      <Footer onNavigate={navigate} />
      <FloatingButtons />
    </div>
  );
}

export default App;
