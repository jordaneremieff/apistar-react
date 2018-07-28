from apistar import App, Route
from apistar_cors import CORSMixin


class CORSApp(CORSMixin, App):
    pass


def welcome(name=None):
    if name is None:
        return {"message": "Welcome to API Star!"}
    return {"message": "Welcome to API Star, %s!" % name}


routes = [Route("/hello/", method="GET", handler=welcome)]

app = CORSApp(routes=routes)


if __name__ == "__main__":
    app.serve("localhost", 8000, debug=True)
