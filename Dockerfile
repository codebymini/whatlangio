FROM python:3.8-slim-buster

#Set the working directory
WORKDIR /app

#copy all the files
COPY requirements.txt .

#Install the dependencies
#RUN apt-get -y update
#RUN apt-get update && apt-get install -y python3 python3-pip
RUN pip install -r requirements.txt

ADD . /app 

#Expose the required port
EXPOSE 5000

#Run the command
CMD ["python", "app/app.py"]