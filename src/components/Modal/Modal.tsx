import { FC, Fragment, useRef, useState, SyntheticEvent } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { FieldValues, useForm } from 'react-hook-form'
import { Randomizer, useDashboards, updateDashboard, Dashboard } from '@/context/DashboardContext'

import classes from './Modal.module.scss'
import Icons from '@/assets/Icons'

interface ModalProps {
  open: boolean
  setOpen: (open: boolean) => void
  item: Randomizer
}

const Modal: FC<ModalProps> = ({ open, setOpen, item }) => {
  const cancelButtonRef = useRef(null)
  const [inValid, setInValid] = useState<boolean>(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm()
  const { dispatch, dashboards, dashboardsId } = useDashboards()

  const { title, items, id } = item

  const onSubmit = ({ randomaizerName, ...fields }: FieldValues) => {
    let items = []
    for (const key in fields) {
      if (Object.prototype.hasOwnProperty.call(fields, key)) {
        const element = fields[key]
        items.push(element)
      }
    }
    const newRandomaizer: Randomizer = { id, title: randomaizerName, items }
    // @ts-ignore
    const dashboardsItem: Dashboard = dashboards?.find((item) => item.id === dashboardsId)
    dashboardsItem.list = [newRandomaizer]
    updateDashboard(dashboardsItem, dispatch)
    setOpen(false)
  }
  
  const onChange = ({ target }: SyntheticEvent) => {
    setInValid(dashboards?.some(({ title }) => title === (target as HTMLInputElement).value))
  }

  const listFields = items.map((fieldValue, ind) => (
    <input
      key={ind}
      className={classes.field}
      placeholder="randomaizer name"
      {...register(fieldValue, { onChange, value: fieldValue })}
    />
  ))

  const IconPlus = Icons.plus

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <form className={classes.addGroups} onSubmit={handleSubmit(onSubmit)}>
                    <input
                      className={classes.field}
                      placeholder="randomaizer name"
                      {...register('randomaizerName', { required: true, onChange, value: title })}
                    />
                    {errors.groupName && <span>This field is required</span>}
                    {listFields}
                    <button className={classes.addButton}>
                      <IconPlus />
                    </button>
                    <button className={classes.addButton} disabled={inValid}>
                      Save
                    </button>
                  </form>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  <button
                    type="button"
                    className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                    onClick={() => setOpen(false)}
                  >
                    Deactivate
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}

export default Modal
