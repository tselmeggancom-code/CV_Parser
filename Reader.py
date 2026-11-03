import os
import pypdf

class CVRead:
    def __init__(self,FilePath):
        self.CurrentCV = FilePath

    def FilePathCheck(self):
        if os.path.exists(self.CurrentCV):
            return True
        else:
            return False

    def ExtractData(self):
        if self.FilePathCheck():
            reader = pypdf.PdfReader(self.CurrentCV)

            for page in reader.pages:
                text = page.extract_text()
                print(text)



CVReadOBJ = CVRead("sample_cv.pdf")
CVReadOBJ.ExtractData()

    