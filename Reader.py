import os
import pypdf
import os
import pypdf
from llama_cpp import Llama
import warnings

os.environ["HF_HUB_VERBOSITY"] = "error"
warnings.filterwarnings("ignore", category=UserWarning)#this is to hide the fact that i need more tokens this is additional

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
            TotalText = ""
            for page in reader.pages:
                text = page.extract_text()
                TotalText = TotalText + text

            return TotalText
        else:
            return "Cannot Extract Data"

    def AnalyseData(self):
        CvContents = self.ExtractData()
        if (CvContents != "Cannot Extract Data"):#this checks if there is any text in the cv
            llm = Llama.from_pretrained(#obtains the llama model 
            repo_id="Qwen/Qwen2.5-1.5B-Instruct-GGUF",
            filename="qwen2.5-1.5b-instruct-q4_k_m.gguf",
            n_ctx=4096,
            verbose=False,
                )

            out = llm.create_chat_completion(
                messages=[{"role": "user", "content": CvContents +" Give me the email,phonenumber,name in that format"}],
                max_tokens=200,#generates one chat to obtain the data 
            )
            Values = out["choices"][0]["message"]["content"].split()
            print(out["choices"][0]["message"]["content"])
            return True
        else:
            return False

CVReadOBJ = CVRead("sample_cv.pdf")
CVReadOBJ.AnalyseData()

    