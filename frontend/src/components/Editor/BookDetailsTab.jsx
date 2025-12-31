import React from "react";
import { UploadCloud } from "lucide-react";
import { BASE_URL } from "../../utils/apiPaths";
import { InputField } from "../UI/InputField";
import { Button } from "../UI/Button";

export const BookDetailsTab = ({
  book,
  onBookChange,
  onCoverUpload,
  isUploading,
  fileInputRef,
}) => {
  const coverImageUrl = book?.coverImage || "";

  return (
    <>
      <div className="p-8 max-w-4xl mx-auto">
        <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-slate-900 mb-4">
            Book Details
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <InputField
              label={"Title"}
              name={"title"}
              value={book.title}
              onChange={onBookChange}
            />

            {console.log(book.author)}
            <InputField
              label={"Author"}
              name={"author"}
              value={book.author}
              onChange={onBookChange}
            />

            <div className="md:col-span-2">
              <InputField
                label={"Subtitle"}
                name={"subTitle"}
                value={book.subTitle || ""}
                onChange={onBookChange}
              />
            </div>
          </div>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm mt-8">
          <h3 className="text-lg font-semibold text-slate-900 mb-4">
            Cover Image
          </h3>
          <div className="flex items-start gap-6">
            <img
              src={coverImageUrl}
              alt={book.title}
              className="w-32 h-48 object-cover rounded-lg bg-slate-100 shadow"
            />
            <div>
              <p className="text-sm text-slate-600 mb-4">
                Upload {coverImageUrl.trim() !== "" ? "a new" : ""} cover image.
                Recommended size: 600x800px
              </p>
              <input
                type="file"
                ref={fileInputRef}
                onChange={onCoverUpload}
                className="hidden"
                accept="image/*"
              />
              <Button
                variant="secondary"
                onClick={() => fileInputRef.current.click()}
                isLoading={isUploading}
                icon={UploadCloud}
              >
                Upload Image
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
