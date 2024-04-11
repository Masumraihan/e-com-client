import { AlertModal } from "../modal/alert-modal";
import { Button } from "./button";
import { Modal } from "./modal";
type BlockModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  loading: boolean;
};
const BlockModal = ({ isOpen, onClose, onConfirm, loading }: BlockModalProps) => {
  return <AlertModal isOpen={isOpen} onClose={onClose} onConfirm={onConfirm} loading={loading} />;
};

export default BlockModal;
