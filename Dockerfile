FROM circleci/node:10.15.3-browsers
USER root
RUN apt-get update

## install java 8
#RUN if grep -q Debian /etc/os-release && grep -q jessie /etc/os-release; then \
#    echo "deb http://http.us.debian.org/debian/ jessie-backports main" | sudo tee -a /etc/apt/sources.list \
#    && echo "deb-src http://http.us.debian.org/debian/ jessie-backports main" | sudo tee -a /etc/apt/sources.list \
#    && sudo apt-get update; sudo apt-get install -y -t jessie-backports openjdk-8-jre openjdk-8-jre-headless openjdk-8-jdk openjdk-8-jdk-headless \
#  ; elif grep -q Ubuntu /etc/os-release && grep -q Trusty /etc/os-release; then \
#    echo "deb http://ppa.launchpad.net/openjdk-r/ppa/ubuntu trusty main" | sudo tee -a /etc/apt/sources.list \
#    && echo "deb-src http://ppa.launchpad.net/openjdk-r/ppa/ubuntu trusty main" | sudo tee -a /etc/apt/sources.list \
#    && sudo apt-key adv --keyserver keyserver.ubuntu.com --recv-key DA1A4A13543B466853BAF164EB9B1D8886F44E2A \
#    && sudo apt-get update; sudo apt-get install -y openjdk-8-jre openjdk-8-jre-headless openjdk-8-jdk openjdk-8-jdk-headless \
#  ; else \
#    sudo apt-get update; sudo apt-get install -y openjdk-8-jre openjdk-8-jre-headless openjdk-8-jdk openjdk-8-jdk-headless \
#  ; fi
#
## install chrome
#RUN curl --silent --show-error --location --fail --retry 3 --output /tmp/google-chrome-stable_current_amd64.deb https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb \
#      && (sudo dpkg -i /tmp/google-chrome-stable_current_amd64.deb || sudo apt-get -fy install)  \
#      && rm -rf /tmp/google-chrome-stable_current_amd64.deb \
#      && sudo sed -i 's|HERE/chrome"|HERE/chrome" --disable-setuid-sandbox --no-sandbox|g' \
#           "/opt/google/chrome/google-chrome" \
#      && google-chrome --version
#
#RUN export CHROMEDRIVER_RELEASE=$(curl --location --fail --retry 3 http://chromedriver.storage.googleapis.com/LATEST_RELEASE) \
#      && curl --silent --show-error --location --fail --retry 3 --output /tmp/chromedriver_linux64.zip "http://chromedriver.storage.googleapis.com/$CHROMEDRIVER_RELEASE/chromedriver_linux64.zip" \
#      && cd /tmp \
#      && unzip chromedriver_linux64.zip \
#      && rm -rf chromedriver_linux64.zip \
#      && sudo mv chromedriver /usr/local/bin/chromedriver \
#      && sudo chmod +x /usr/local/bin/chromedriver \
#      && chromedriver --version

# Make and switch to the /code directory which will hold the tests
RUN mkdir /code
WORKDIR /code

# Copy over the rest of the tests
ADD . /code

# run npm install
RUN npm install

# run the tests
CMD sh ./run-tests.sh
# ENTRYPOINT sh ./run-tests.sh