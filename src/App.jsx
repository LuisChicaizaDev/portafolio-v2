import { Mail, Zap } from 'lucide-react'; // Asegúrate de tener instalado lucide-react
import Button from './components/ui/Button';
import Badge from './components/ui/Badge';

function App() {

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-8 bg-slate-950 p-10">
      
      <h1 className="text-3xl font-bold text-white">Test de Componentes</h1>
      
      {/* Zona de Pruebas de Badges */}
      <div className="flex gap-4">
        <Badge text="Solo Texto" />
        <Badge icon={Zap} text="Con Icono" />
      </div>

      {/* Zona de Pruebas de Botones */}
      <div className="flex gap-4 items-center">
        <Button variant="primary">Botón Primario</Button>
        <Button variant="secondary" icon={Mail}>Botón Secundario</Button>
        <Button variant="outline">Outline</Button>
      </div>

    </div>
  )
}

export default App
