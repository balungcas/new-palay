import React, { useState } from 'react';
import { Upload, Check, AlertCircle } from 'lucide-react';

interface FileUploadProps {
  onUpload: (data: any[]) => void;
}

const FileUpload: React.FC<FileUploadProps> = ({ onUpload }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const processCSV = (csv: string) => {
    const lines = csv.split('\n');
    const headers = lines[0].split(',').map(header => header.trim());
    const data = [];

    for (let i = 1; i < lines.length; i++) {
      if (!lines[i].trim()) continue;
      
      const values = lines[i].split(',').map(value => value.trim());
      const entry = {};
      
      headers.forEach((header, index) => {
        entry[header] = values[index];
      });
      
      data.push(entry);
    }

    return data;
  };

  const handleFile = async (file: File) => {
    setError(null);
    setSuccess(false);

    if (file.type !== 'text/csv') {
      setError('Please upload a CSV file');
      return;
    }

    try {
      const text = await file.text();
      const data = processCSV(text);
      onUpload(data);
      setSuccess(true);
    } catch (err) {
      setError('Error processing file. Please check the format.');
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);

    const file = e.dataTransfer.files[0];
    if (file) {
      handleFile(file);
    }
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleFile(file);
    }
  };

  return (
    <div className="w-full">
      <div
        className={`border-2 border-dashed rounded-lg p-8 text-center ${
          isDragging
            ? 'border-green-500 bg-green-50'
            : 'border-gray-300 hover:border-green-500'
        } transition-colors`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <input
          type="file"
          accept=".csv"
          onChange={handleFileInput}
          className="hidden"
          id="file-upload"
        />
        <label
          htmlFor="file-upload"
          className="cursor-pointer flex flex-col items-center"
        >
          <Upload className="h-12 w-12 text-gray-400 mb-4" />
          <p className="text-gray-600 mb-2">
            Drag and drop your CSV file here, or click to browse
          </p>
          <p className="text-sm text-gray-500">
            Supported format: CSV
          </p>
        </label>
      </div>

      {error && (
        <div className="mt-4 p-3 bg-red-50 text-red-700 rounded-md flex items-center">
          <AlertCircle className="h-5 w-5 mr-2" />
          {error}
        </div>
      )}

      {success && (
        <div className="mt-4 p-3 bg-green-50 text-green-700 rounded-md flex items-center">
          <Check className="h-5 w-5 mr-2" />
          File uploaded successfully!
        </div>
      )}
    </div>
  );
};

export default FileUpload;