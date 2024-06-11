import { Label } from "@/components/ui/label"
import { SelectValue, SelectTrigger, SelectItem, SelectGroup, SelectContent, Select } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { CardContent, CardFooter, Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function GenerateForm () {
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center bg-gray-950 px-4 py-12 dark:bg-gray-950 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-md space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight text-gray-100 dark:text-gray-100 sm:text-4xl">
            Password Generator
          </h1>
          <p className="mt-2 text-lg text-gray-400 dark:text-gray-400">
            Create a secure password with just a few clicks.
          </p>
        </div>
        <Card className="shadow-lg">
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 items-center gap-4">
              <Label className="text-gray-300 dark:text-gray-300" htmlFor="length">
                Password Length
              </Label>
              <Select defaultValue="12" name="length">
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select length" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="8">8 characters</SelectItem>
                    <SelectItem value="10">10 characters</SelectItem>
                    <SelectItem value="12">12 characters</SelectItem>
                    <SelectItem value="14">14 characters</SelectItem>
                    <SelectItem value="16">16 characters</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className="grid grid-cols-2 items-center gap-4">
              <Label className="text-gray-300 dark:text-gray-300" htmlFor="letters">
                Use Letters
              </Label>
              <Checkbox defaultChecked id="letters" />
            </div>
            <div className="grid grid-cols-2 items-center gap-4">
              <Label className="text-gray-300 dark:text-gray-300" htmlFor="numbers">
                Use Numbers
              </Label>
              <Checkbox defaultChecked id="numbers" />
            </div>
            <div className="grid grid-cols-2 items-center gap-4">
              <Label className="text-gray-300 dark:text-gray-300" htmlFor="symbols">
                Use Symbols
              </Label>
              <Checkbox defaultChecked id="symbols" />
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Generate Password</Button>
          </CardFooter>
        </Card>
        <div className="text-center">
          <p className="text-lg font-medium text-gray-100 dark:text-gray-100">Your generated password:</p>
          <div className="mt-2 flex items-center justify-center">
            <p className="text-2xl font-bold tracking-tight text-gray-100 dark:text-gray-100">Xt8#2Ks9Lm!</p>
            <Button
              className="ml-2 text-gray-400 hover:text-gray-300 dark:text-gray-400 dark:hover:text-gray-300"
              size="icon"
              variant="ghost"
            >
              {/* <CopyIcon className="h-5 w-5" /> */}
              <span className="sr-only">Copy to clipboard</span>
            </Button>
          </div>
        </div>
      </div>
    </main>
  )
}