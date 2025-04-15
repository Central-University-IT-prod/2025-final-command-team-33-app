from backend.src.app import app

if __name__ == "__main__":
    app.run()

from werkzeug.middleware.dispatcher import DispatcherMiddleware

def default_app(environ, start_response):
    start_response("404 Not Found", [("Content-Type", "text/plain")])
    return [b"Page not found"]

# Объединяем два приложения с использованием DispatcherMiddleware
# Первое приложение будет доступно по пути /app1, а второе по /app2
application = DispatcherMiddleware(default_app, {
    '': app,
})
# /api подставляет сам nginx
