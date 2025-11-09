import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Package, ShoppingCart } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface CustomerTypeModalProps {
  open: boolean;
  onClose: () => void;
  onSelectType: (type: 'bulk' | 'retail') => void;
}

const CustomerTypeModal = ({ open, onClose, onSelectType }: CustomerTypeModalProps) => {
  const navigate = useNavigate();

  const handleBulkSelection = () => {
    onSelectType('bulk');
    navigate('/products');
    onClose();
  };

  const handleRetailSelection = () => {
    onSelectType('retail');
    navigate('/products');
    onClose();
  };

  return (
    <Dialog open={open} onOpenChange={(isOpen) => !isOpen && onClose()}>
      <DialogContent className="sm:max-w-2xl border-0 shadow-strong">
        <DialogHeader>
          <DialogTitle className="text-3xl text-center mb-2">Welcome to Seatech</DialogTitle>
          <DialogDescription className="text-center text-lg">
            How would you like to shop with us today?
          </DialogDescription>
        </DialogHeader>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <button
            onClick={handleBulkSelection}
            className="group relative overflow-hidden rounded-xl border-2 border-border hover:border-primary transition-all p-8 text-left hover:shadow-strong"
          >
            <div className="absolute inset-0 gradient-primary opacity-0 group-hover:opacity-10 transition-opacity" />
            <div className="relative z-10">
              <div className="w-16 h-16 rounded-full gradient-primary flex items-center justify-center mb-4">
                <Package className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Bulk Purchase</h3>
              <p className="text-muted-foreground mb-4">
                For dealers and businesses looking to purchase in large quantities
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Request custom quotes</li>
                <li>• Volume discounts available</li>
                <li>• Dedicated support</li>
                <li>• Flexible payment terms</li>
              </ul>
            </div>
          </button>

          <button
            onClick={handleRetailSelection}
            className="group relative overflow-hidden rounded-xl border-2 border-border hover:border-primary transition-all p-8 text-left hover:shadow-strong"
          >
            <div className="absolute inset-0 gradient-primary opacity-0 group-hover:opacity-10 transition-opacity" />
            <div className="relative z-10">
              <div className="w-16 h-16 rounded-full gradient-primary flex items-center justify-center mb-4">
                <ShoppingCart className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Retail Purchase</h3>
              <p className="text-muted-foreground mb-4">
                For individual customers looking to buy single pieces
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Transparent pricing</li>
                <li>• Quick checkout</li>
                <li>• Easy returns</li>
                <li>• Immediate availability</li>
              </ul>
            </div>
          </button>
        </div>

        <div className="mt-4 text-center">
          <Button variant="ghost" onClick={onClose} className="text-muted-foreground">
            I'll decide later
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CustomerTypeModal;
