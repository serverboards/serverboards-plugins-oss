#!env/bin/python3
import tarfile, os, yaml, requests, shutil
from io import BytesIO

def cwd(*filenames):
    return os.path.join(os.environ["HOME"], *filenames)

def setup():
    latest = yaml.load(open("manifest.yaml"))["data"]

    for program, data in latest.items():
        print(program,data)
        prom = requests.get(data["url"], allow_redirects=True, stream=True)
        prom.raw.decode_content=True
        tgz = prom.raw.read()
        tgz = BytesIO(tgz)
        tf = tarfile.open(fileobj=tgz)
        if not os.path.exists(cwd(program)):
            os.makedirs(cwd(program))

        for m in tf.getmembers():
            for promfile in data["files"]:
                if m.name.endswith(promfile):
                    with open(cwd(program,promfile),"wb") as wd:
                        fdata = tf.extractfile(m).read()
                        wd.write(fdata)
                    os.chmod(cwd(program,promfile), m.mode)

    shutil.copy("prometheus.yml", cwd("prometheus.yml"))
    with open(cwd("promservices.yaml"),"wt") as wd:
        wd.write("[]")

    print("Done")

if __name__=='__main__':
    setup()
