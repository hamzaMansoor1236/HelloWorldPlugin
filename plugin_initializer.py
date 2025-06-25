class HelloWorldInitializer:
    def __init__(self):
        self.name = "HelloWorld"

    async def initialize(self, user_id, db_session):
        print(f"Initializing plugin for user: {user_id}")