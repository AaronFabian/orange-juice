FROM php:8.2-cli

# Install dependencies
RUN apt-get update && \
    apt-get install -y git zip unzip && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

# Install Composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

WORKDIR /app

COPY . .

RUN composer install

EXPOSE 8000
# required for docker desktop port mapping

CMD ["php", "artisan", "serve"]
