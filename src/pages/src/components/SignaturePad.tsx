import { useRef, useState } from "react";
import SignatureCanvas from "react-signature-canvas";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Eraser, Check, PenTool } from "lucide-react";

interface SignaturePadProps {
  label: string;
  onSave: (dataUrl: string) => void;
  savedSignature?: string;
}

const SignaturePad = ({ label, onSave, savedSignature }: SignaturePadProps) => {
  const sigRef = useRef<SignatureCanvas>(null);
  const [saved, setSaved] = useState(!!savedSignature);

  const clear = () => {
    sigRef.current?.clear();
    setSaved(false);
  };

  const save = () => {
    if (sigRef.
