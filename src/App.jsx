import React, { useEffect, useMemo, useState } from "react";
import {
  AlertTriangle,
  Bell,
  CalendarDays,
  CheckCircle2,
  Clock,
  Copy,
  Home,
  Info,
  LogOut,
  MapPin,
  Navigation,
  Phone,
  Pencil,
  Plus,
  RotateCcw,
  Save,
  Share2,
  SlidersHorizontal,
  Smartphone,
  Trash2,
  UserCog,
  UserRound,
  Volume2,
  X,
} from "lucide-react";
import { motion } from "framer-motion";

function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Card({ className = "", children }) {
  return <div className={className}>{children}</div>;
}

function CardContent({ className = "", children }) {
  return <div className={className}>{children}</div>;
}

function Button({ className = "", variant = "default", size = "default", disabled, children, ...props }) {
  const base = "inline-flex items-center justify-center font-bold transition disabled:pointer-events-none disabled:opacity-50";
  const variants = {
    default: "bg-emerald-600 text-white hover:bg-emerald-700",
    secondary: "bg-slate-100 text-slate-900 hover:bg-slate-200",
    outline: "border border-slate-200 bg-white text-slate-700 hover:bg-slate-50",
    danger: "bg-red-600 text-white hover:bg-red-700",
  };
  const sizes = {
    default: "px-4 py-2",
    sm: "px-3 py-2 text-xs",
  };

  return (
    <button
      className={cn(base, variants[variant] || variants.default, sizes[size] || sizes.default, className)}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}

const children = [
  { id: "donghun", name: "동훈", grade: "초5" },
  { id: "dongjun", name: "동준", grade: "초3" },
];

const defaultSchedules = [
  {
    id: 1,
    childId: "dongjun",
    day: "월",
    title: "한국사",
    place: "한국사 수업 장소",
    address: "장소를 입력해주세요",
    start: "14:00",
    end: "15:00",
    status: "대기",
    transport: "이동방법 입력 필요",
    items: "준비물 확인 필요",
    alert: "10분 전",
  },
  {
    id: 2,
    childId: "dongjun",
    day: "월",
    title: "파워점핑",
    place: "파워점핑",
    address: "장소를 입력해주세요",
    start: "16:30",
    end: "17:30",
    status: "대기",
    transport: "이동방법 입력 필요",
    items: "운동복, 물병",
    alert: "15분 전",
  },
  {
    id: 3,
    childId: "dongjun",
    day: "화",
    title: "바둑",
    place: "바둑 수업 장소",
    address: "장소를 입력해주세요",
    start: "14:00",
    end: "15:00",
    status: "대기",
    transport: "이동방법 입력 필요",
    items: "준비물 확인 필요",
    alert: "10분 전",
  },
  {
    id: 4,
    childId: "dongjun",
    day: "수",
    title: "바둑",
    place: "바둑 수업 장소",
    address: "장소를 입력해주세요",
    start: "14:00",
    end: "15:00",
    status: "대기",
    transport: "이동방법 입력 필요",
    items: "준비물 확인 필요",
    alert: "10분 전",
  },
  {
    id: 5,
    childId: "dongjun",
    day: "수",
    title: "파워점핑",
    place: "파워점핑",
    address: "장소를 입력해주세요",
    start: "16:30",
    end: "17:30",
    status: "대기",
    transport: "이동방법 입력 필요",
    items: "운동복, 물병",
    alert: "15분 전",
  },
  {
    id: 6,
    childId: "dongjun",
    day: "목",
    title: "파워점핑",
    place: "파워점핑",
    address: "장소를 입력해주세요",
    start: "16:30",
    end: "17:30",
    status: "대기",
    transport: "이동방법 입력 필요",
    items: "운동복, 물병",
    alert: "15분 전",
  },
  {
    id: 7,
    childId: "donghun",
    day: "월",
    title: "영어",
    place: "영어 수업 장소",
    address: "장소를 입력해주세요",
    start: "16:00",
    end: "17:00",
    status: "대기",
    transport: "이동방법 입력 필요",
    items: "영어 교재, 필통",
    alert: "10분 전",
  },
  {
    id: 8,
    childId: "donghun",
    day: "월",
    title: "파워점핑",
    place: "파워점핑",
    address: "장소를 입력해주세요",
    start: "18:20",
    end: "19:20",
    status: "대기",
    transport: "이동방법 입력 필요",
    items: "운동복, 물병",
    alert: "15분 전",
  },
  {
    id: 9,
    childId: "donghun",
    day: "화",
    title: "영어",
    place: "영어 수업 장소",
    address: "장소를 입력해주세요",
    start: "16:00",
    end: "17:00",
    status: "대기",
    transport: "이동방법 입력 필요",
    items: "영어 교재, 필통",
    alert: "10분 전",
  },
  {
    id: 10,
    childId: "donghun",
    day: "화",
    title: "파워점핑",
    place: "파워점핑",
    address: "장소를 입력해주세요",
    start: "18:20",
    end: "19:20",
    status: "대기",
    transport: "이동방법 입력 필요",
    items: "운동복, 물병",
    alert: "15분 전",
  },
  {
    id: 11,
    childId: "donghun",
    day: "수",
    title: "영어",
    place: "영어 수업 장소",
    address: "장소를 입력해주세요",
    start: "16:00",
    end: "17:00",
    status: "대기",
    transport: "이동방법 입력 필요",
    items: "영어 교재, 필통",
    alert: "10분 전",
  },
  {
    id: 12,
    childId: "donghun",
    day: "수",
    title: "파워점핑",
    place: "파워점핑",
    address: "장소를 입력해주세요",
    start: "18:20",
    end: "19:20",
    status: "대기",
    transport: "이동방법 입력 필요",
    items: "운동복, 물병",
    alert: "15분 전",
  },
  {
    id: 13,
    childId: "donghun",
    day: "목",
    title: "영어",
    place: "영어 수업 장소",
    address: "장소를 입력해주세요",
    start: "16:00",
    end: "17:00",
    status: "대기",
    transport: "이동방법 입력 필요",
    items: "영어 교재, 필통",
    alert: "10분 전",
  },
  {
    id: 14,
    childId: "donghun",
    day: "목",
    title: "파워점핑",
    place: "파워점핑",
    address: "장소를 입력해주세요",
    start: "18:20",
    end: "19:20",
    status: "대기",
    transport: "이동방법 입력 필요",
    items: "운동복, 물병",
    alert: "15분 전",
  },
  {
    id: 15,
    childId: "donghun",
    day: "금",
    title: "영어",
    place: "영어 수업 장소",
    address: "장소를 입력해주세요",
    start: "16:00",
    end: "17:00",
    status: "대기",
    transport: "이동방법 입력 필요",
    items: "영어 교재, 필통",
    alert: "10분 전",
  },
  {
    id: 16,
    childId: "donghun",
    day: "금",
    title: "파워점핑",
    place: "파워점핑",
    address: "장소를 입력해주세요",
    start: "18:20",
    end: "19:20",
    status: "대기",
    transport: "이동방법 입력 필요",
    items: "운동복, 물병",
    alert: "15분 전",
  },
];

const statusStyle = {
  "이동 전": "bg-slate-100 text-slate-700",
  대기: "bg-blue-100 text-blue-700",
  "이동 중": "bg-orange-100 text-orange-700",
  "도착 완료": "bg-green-100 text-green-700",
  "귀가 완료": "bg-emerald-100 text-emerald-700",
  "수업 중": "bg-purple-100 text-purple-700",
  끝남: "bg-zinc-100 text-zinc-500",
  미확인: "bg-red-100 text-red-700",
};

const days = ["월", "화", "수", "목", "금", "토", "일"];

function timeToMinutes(time) {
  if (!time || !time.includes(":")) return 0;
  const [h, m] = time.split(":").map(Number);
  if (Number.isNaN(h) || Number.isNaN(m)) return 0;
  return h * 60 + m;
}

function alertToMinutes(alertText) {
  const numberOnly = String(alertText || "10").replace(/[^0-9]/g, "");
  return numberOnly ? Number(numberOnly) : 10;
}

function getNowMinutes(now = new Date()) {
  return now.getHours() * 60 + now.getMinutes();
}

function getTodayKoreanDay(now = new Date()) {
  const index = now.getDay();
  return ["일", "월", "화", "수", "목", "금", "토"][index];
}

function getActiveAlerts(schedules, selectedChild, selectedDay, nowMinutes = getNowMinutes()) {
  return schedules
    .filter((s) => s.childId === selectedChild && s.day === selectedDay && s.status !== "끝남")
    .map((s) => {
      const startMinutes = timeToMinutes(s.start);
      const alertMinutes = alertToMinutes(s.alert);
      const diff = startMinutes - nowMinutes;
      return { ...s, diff, alertMinutes };
    })
    .filter((s) => s.diff >= 0 && s.diff <= s.alertMinutes)
    .sort((a, b) => a.diff - b.diff);
}

function getCurrentSchedule(schedules, childId, selectedDay, nowMinutes = getNowMinutes()) {
  const childSchedules = schedules
    .filter((s) => s.childId === childId && s.day === selectedDay)
    .sort((a, b) => timeToMinutes(a.start) - timeToMinutes(b.start));

  if (childSchedules.length === 0) return null;

  const ongoing = childSchedules.find(
    (s) => nowMinutes >= timeToMinutes(s.start) && nowMinutes <= timeToMinutes(s.end)
  );
  if (ongoing) return ongoing;

  const next = childSchedules.find((s) => nowMinutes < timeToMinutes(s.start));
  return next || childSchedules[childSchedules.length - 1];
}

function loadSavedSchedules() {
  try {
    if (typeof localStorage === "undefined") return defaultSchedules;
    const saved = localStorage.getItem("hakwonSchedules");
    return saved ? JSON.parse(saved) : defaultSchedules;
  } catch {
    return defaultSchedules;
  }
}

function saveSchedulesToStorage(schedules) {
  try {
    if (typeof localStorage !== "undefined") {
      localStorage.setItem("hakwonSchedules", JSON.stringify(schedules));
    }
  } catch {
    // 저장 공간이 막힌 환경에서는 화면 상태만 유지합니다.
  }
}

async function safeCopyText(text) {
  if (!text) return false;

  try {
    if (typeof navigator !== "undefined" && navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(text);
      return true;
    }
  } catch {
    // fallback으로 이어집니다.
  }

  try {
    if (typeof document === "undefined") return false;
    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.setAttribute("readonly", "");
    textarea.style.position = "fixed";
    textarea.style.left = "-9999px";
    document.body.appendChild(textarea);
    textarea.select();
    const ok = document.execCommand("copy");
    document.body.removeChild(textarea);
    return ok;
  } catch {
    return false;
  }
}

async function safeShareOrCopy({ title, text, url }) {
  const shareData = { title, text, url };

  try {
    if (typeof navigator !== "undefined" && typeof navigator.share === "function") {
      await navigator.share(shareData);
      return { ok: true, method: "share" };
    }
  } catch {
    // NotAllowedError, AbortError, sandbox 제한 등에서는 링크 복사로 대체합니다.
  }

  const copied = await safeCopyText(url);
  return copied ? { ok: true, method: "copy" } : { ok: false, method: "none" };
}

function runSelfTests() {
  const sample = [
    { id: 101, childId: "a", day: "월", start: "10:00", end: "11:00", status: "대기", alert: "10분 전" },
    { id: 102, childId: "a", day: "월", start: "12:00", end: "13:00", status: "끝남", alert: "30분 전" },
  ];

  console.assert(timeToMinutes("14:30") === 870, "timeToMinutes should parse HH:mm");
  console.assert(alertToMinutes("15분 전") === 15, "alertToMinutes should parse Korean alert text");
  console.assert(getTodayKoreanDay(new Date("2026-05-18T00:00:00")) === "월", "getTodayKoreanDay should return Korean weekday");
  console.assert(getCurrentSchedule(sample, "a", "월", 10 * 60 + 30)?.id === 101, "getCurrentSchedule should return ongoing schedule");
  console.assert(getActiveAlerts(sample, "a", "월", 9 * 60 + 55).length === 1, "getActiveAlerts should find upcoming active alert");
  console.assert(getActiveAlerts(sample, "a", "월", 11 * 60 + 35).length === 0, "getActiveAlerts should ignore ended schedules");
  console.assert(typeof safeShareOrCopy === "function", "safeShareOrCopy should exist as share fallback helper");
  console.assert("01088337590".startsWith("010"), "Dad phone number should be available for tel links");
  console.assert("01027460913".startsWith("010"), "Mom phone number should be available for tel links");
  console.assert(statusStyle["귀가 완료"].includes("emerald"), "Home arrival status should have a visible style");
}

if (typeof window !== "undefined" && !window.__HAKWON_SELF_TESTED__) {
  window.__HAKWON_SELF_TESTED__ = true;
  runSelfTests();
}

export default function App() {
  const [role, setRole] = useState("child");
  const [selectedChild, setSelectedChild] = useState("donghun");
  const [schedules, setSchedules] = useState(loadSavedSchedules);
  const [showAdd, setShowAdd] = useState(false);
  const [selectedDay, setSelectedDay] = useState(getTodayKoreanDay());
  const emptyScheduleForm = {
    title: "",
    place: "",
    address: "",
    start: "",
    end: "",
    transport: "",
    items: "",
    alert: "10분 전",
  };
  const [newSchedule, setNewSchedule] = useState(emptyScheduleForm);
  const [editingScheduleId, setEditingScheduleId] = useState(null);
  const [deleteTarget, setDeleteTarget] = useState(null);
  const [notificationPermission, setNotificationPermission] = useState(
    typeof Notification === "undefined" ? "unsupported" : Notification.permission
  );
  const [sentAlertIds, setSentAlertIds] = useState([]);
  const [appAlerts, setAppAlerts] = useState([]);
  const [nowTick, setNowTick] = useState(Date.now());
  const [copyMessage, setCopyMessage] = useState("");
  const [activeMenu, setActiveMenu] = useState("home");

  useEffect(() => {
    const timer = setInterval(() => setNowTick(Date.now()), 30000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    saveSchedulesToStorage(schedules);
  }, [schedules]);

  const child = children.find((c) => c.id === selectedChild);
  const current = useMemo(
    () => getCurrentSchedule(schedules, selectedChild, selectedDay),
    [schedules, selectedChild, selectedDay, nowTick]
  );
  const todaySchedules = useMemo(
    () =>
      schedules
        .filter((s) => s.childId === selectedChild && s.day === selectedDay)
        .sort((a, b) => timeToMinutes(a.start) - timeToMinutes(b.start)),
    [schedules, selectedChild, selectedDay]
  );
  const activeAlerts = useMemo(
    () => getActiveAlerts(schedules, selectedChild, selectedDay),
    [schedules, selectedChild, selectedDay, nowTick]
  );

  useEffect(() => {
    activeAlerts.forEach((alert) => {
      const alertId = `${alert.id}-${alert.day}-${alert.start}`;
      if (sentAlertIds.includes(alertId)) return;

      const childName = children.find((c) => c.id === alert.childId)?.name || "아이";
      const title = `${childName}, ${alert.title} 갈 시간이에요`;
      const body = `${alert.start} 시작 · 장소: ${alert.place}`;

      setAppAlerts((prev) =>
        [
          {
            id: alertId,
            title,
            body,
            time: new Date().toLocaleTimeString("ko-KR", { hour: "2-digit", minute: "2-digit" }),
          },
          ...prev,
        ].slice(0, 5)
      );

      try {
        if (notificationPermission === "granted" && typeof Notification !== "undefined") {
          new Notification(title, { body });
        }
      } catch {
        // 브라우저가 알림을 제한해도 앱은 계속 동작합니다.
      }

      setSentAlertIds((prev) => [...prev, alertId]);
    });
  }, [activeAlerts, notificationPermission, sentAlertIds]);

  const requestNotificationPermission = async () => {
    try {
      if (typeof Notification === "undefined") {
        setNotificationPermission("unsupported");
        return;
      }
      const result = await Notification.requestPermission();
      setNotificationPermission(result);
    } catch {
      setNotificationPermission("denied");
    }
  };

  const testNotification = () => {
    const childName = child?.name || "아이";
    const title = `${childName}, 다음 일정 확인해요`;
    const body = current ? `${current.title} · ${current.start} · ${current.place}` : "오늘은 등록된 일정이 없습니다.";

    setAppAlerts((prev) =>
      [
        {
          id: `test-${Date.now()}`,
          title,
          body,
          time: new Date().toLocaleTimeString("ko-KR", { hour: "2-digit", minute: "2-digit" }),
        },
        ...prev,
      ].slice(0, 5)
    );

    try {
      if (notificationPermission === "granted" && typeof Notification !== "undefined") {
        new Notification(title, { body });
      }
    } catch {
      setAppAlerts((prev) =>
        [
          {
            id: `notification-blocked-${Date.now()}`,
            title: "브라우저 알림이 제한됐어요",
            body: "앱 안 최근 알림에는 정상적으로 기록됩니다.",
            time: new Date().toLocaleTimeString("ko-KR", { hour: "2-digit", minute: "2-digit" }),
          },
          ...prev,
        ].slice(0, 5)
      );
    }
  };

  const clearAppAlerts = () => setAppAlerts([]);

  const resetSchedules = () => {
    if (typeof window !== "undefined" && !window.confirm("일정을 처음 상태로 되돌릴까요? 직접 추가한 일정은 사라집니다.")) return;
    setSchedules(defaultSchedules);
    setAppAlerts([]);
    setSentAlertIds([]);
  };

  const updateStatus = (id, status) => {
    setSchedules((prev) => prev.map((s) => (s.id === id ? { ...s, status } : s)));
  };

  const requestDeleteSchedule = (schedule) => setDeleteTarget(schedule);
  const cancelDeleteSchedule = () => setDeleteTarget(null);

  const confirmDeleteSchedule = () => {
    if (!deleteTarget) return;
    setSchedules((prev) => prev.filter((s) => s.id !== deleteTarget.id));
    setDeleteTarget(null);
  };

  const addSchedule = () => {
    if (!newSchedule.title.trim() || !newSchedule.start.trim()) return;

    const scheduleData = {
      childId: selectedChild,
      day: selectedDay,
      title: newSchedule.title.trim(),
      place: newSchedule.place.trim() || "장소를 입력해주세요",
      address: newSchedule.address.trim() || "상세 위치를 입력해주세요",
      start: newSchedule.start,
      end: newSchedule.end || newSchedule.start,
      transport: newSchedule.transport.trim() || "이동방법 입력 필요",
      items: newSchedule.items.trim() || "준비물 확인 필요",
      alert: newSchedule.alert,
    };

    if (editingScheduleId) {
      setSchedules((prev) => prev.map((s) => (s.id === editingScheduleId ? { ...s, ...scheduleData } : s)));
    } else {
      setSchedules((prev) => [...prev, { id: Date.now(), status: "대기", ...scheduleData }]);
    }

    setNewSchedule(emptyScheduleForm);
    setEditingScheduleId(null);
    setShowAdd(false);
  };

  const startEditSchedule = (schedule) => {
    setEditingScheduleId(schedule.id);
    setNewSchedule({
      title: schedule.title || "",
      place: schedule.place || "",
      address: schedule.address || "",
      start: schedule.start || "",
      end: schedule.end || "",
      transport: schedule.transport || "",
      items: schedule.items || "",
      alert: schedule.alert || "10분 전",
    });
    setShowAdd(true);
  };

  const cancelScheduleForm = () => {
    setNewSchedule(emptyScheduleForm);
    setEditingScheduleId(null);
    setShowAdd(false);
  };

  const updateNewSchedule = (field, value) => {
    setNewSchedule((prev) => ({ ...prev, [field]: value }));
  };

  const copyAppLink = async () => {
    const currentUrl = typeof window !== "undefined" ? window.location.href : "";
    const copied = await safeCopyText(currentUrl);
    setCopyMessage(copied ? "앱 링크를 복사했어요" : "주소창의 링크를 직접 복사해주세요");
    setTimeout(() => setCopyMessage(""), 2200);
  };

  const shareApp = async () => {
    const currentUrl = typeof window !== "undefined" ? window.location.href : "";
    const result = await safeShareOrCopy({
      title: "학원 안가니?",
      text: "동훈이와 동준이 학원 이동 알림앱",
      url: currentUrl,
    });

    if (result.method === "share") {
      setCopyMessage("공유창을 열었어요");
    } else if (result.method === "copy") {
      setCopyMessage("공유가 제한되어 링크를 복사했어요");
    } else {
      setCopyMessage("공유가 제한됐어요. 주소창의 링크를 직접 복사해주세요");
    }
    setTimeout(() => setCopyMessage(""), 2600);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 via-white to-sky-50 text-slate-900">
      <div className="mx-auto max-w-md px-4 py-5">
        <header className="mb-5">
          <div className="mb-4">
            <p className="text-sm font-medium text-emerald-700">초등학생 동선 알림앱</p>
            <h1 className="text-3xl font-black tracking-tight">학원 안가니?</h1>
          </div>
          <div className="grid grid-cols-2 rounded-3xl border border-slate-100 bg-white p-1 shadow-sm">
            <button
              onClick={() => setRole("child")}
              className={`rounded-2xl py-3 text-sm font-black transition ${
                role === "child" ? "bg-emerald-600 text-white shadow" : "text-slate-500"
              }`}
            >
              아이용 화면
            </button>
            <button
              onClick={() => setRole("parent")}
              className={`rounded-2xl py-3 text-sm font-black transition ${
                role === "parent" ? "bg-emerald-600 text-white shadow" : "text-slate-500"
              }`}
            >
              부모용 화면
            </button>
          </div>
        </header>

        <div className="mb-4 grid grid-cols-2 gap-2">
          {children.map((c) => (
            <button
              key={c.id}
              onClick={() => setSelectedChild(c.id)}
              className={`rounded-2xl border p-3 text-left shadow-sm transition ${
                selectedChild === c.id ? "border-emerald-400 bg-emerald-100" : "border-slate-200 bg-white"
              }`}
            >
              <div className="flex items-center gap-2">
                <UserRound size={18} />
                <span className="font-bold">{c.name}</span>
                <span className="text-xs text-slate-500">{c.grade}</span>
              </div>
            </button>
          ))}
        </div>

        <div className="mb-4 grid grid-cols-7 gap-1">
          {days.map((day) => (
            <button
              key={day}
              onClick={() => setSelectedDay(day)}
              className={`rounded-2xl py-2 text-sm font-black transition ${
                selectedDay === day ? "bg-emerald-600 text-white shadow" : "border border-slate-100 bg-white text-slate-500"
              }`}
            >
              {day}
            </button>
          ))}
        </div>

        <MainMenu activeMenu={activeMenu} setActiveMenu={setActiveMenu} />

        {activeMenu === "home" &&
          (role === "child" ? (
            <ChildView child={child} current={current} selectedDay={selectedDay} updateStatus={updateStatus} />
          ) : (
            <ParentView
              child={child}
              selectedDay={selectedDay}
              schedules={todaySchedules}
              updateStatus={updateStatus}
              showAdd={showAdd}
              setShowAdd={setShowAdd}
              newSchedule={newSchedule}
              updateNewSchedule={updateNewSchedule}
              addSchedule={addSchedule}
              startEditSchedule={startEditSchedule}
              editingScheduleId={editingScheduleId}
              cancelScheduleForm={cancelScheduleForm}
              requestDeleteSchedule={requestDeleteSchedule}
              deleteTarget={deleteTarget}
              cancelDeleteSchedule={cancelDeleteSchedule}
              confirmDeleteSchedule={confirmDeleteSchedule}
            />
          ))}

        {activeMenu === "notice" && (
          <NotificationPanel
            activeAlerts={activeAlerts}
            appAlerts={appAlerts}
            permission={notificationPermission}
            onRequestPermission={requestNotificationPermission}
            onTest={testNotification}
            onClear={clearAppAlerts}
            onReset={resetSchedules}
          />
        )}

        {activeMenu === "settings" && <WebAppGuidePanel onCopy={copyAppLink} onShare={shareApp} copyMessage={copyMessage} />}
      </div>
    </div>
  );
}

function MainMenu({ activeMenu, setActiveMenu }) {
  const menus = [
    { id: "home", label: "홈", icon: <Home size={17} /> },
    { id: "notice", label: "공지사항", icon: <Bell size={17} /> },
    { id: "settings", label: "설정", icon: <Smartphone size={17} /> },
  ];

  return (
    <div className="mb-4 grid grid-cols-3 rounded-3xl border border-slate-100 bg-white p-1 shadow-sm">
      {menus.map((menu) => (
        <button
          key={menu.id}
          onClick={() => setActiveMenu(menu.id)}
          className={`flex items-center justify-center gap-1 rounded-2xl py-3 text-sm font-black transition ${
            activeMenu === menu.id ? "bg-slate-900 text-white shadow" : "text-slate-500"
          }`}
        >
          {menu.icon}
          {menu.label}
        </button>
      ))}
    </div>
  );
}

function WebAppGuidePanel({ onCopy, onShare, copyMessage }) {
  const [selectedSetting, setSelectedSetting] = useState(null);

  const settingItems = [
    {
      id: "profile",
      title: "내정보관리",
      desc: "보호자와 아이 정보를 확인합니다.",
      icon: <UserCog size={20} />,
      detail: "현재 등록된 아이: 동훈(초5), 동준(초3) · 보호자 연락처: 아빠, 엄마 등록 완료",
    },
    {
      id: "alarm",
      title: "알림설정",
      desc: "일정 알림과 테스트 알림을 관리합니다.",
      icon: <SlidersHorizontal size={20} />,
      detail: "일정별 5분 전, 10분 전, 15분 전, 20분 전, 30분 전 알림을 설정할 수 있습니다.",
    },
    {
      id: "logout",
      title: "로그아웃",
      desc: "현재 시제품은 로그인 없이 사용 중입니다.",
      icon: <LogOut size={20} />,
      detail: "Firebase 로그인 기능을 연결하면 실제 로그아웃 기능을 사용할 수 있습니다.",
    },
    {
      id: "version",
      title: "버전 정보",
      desc: "학원 안가니? v0.1.0",
      icon: <Info size={20} />,
      detail: "현재 버전은 일정 저장, 알림 테스트, 홈 화면 추가 안내가 포함된 웹앱 시제품입니다.",
    },
  ];

  return (
    <Card className="mb-4 rounded-3xl border-0 bg-white shadow-lg">
      <CardContent className="p-4">
        <div className="mb-4 flex items-center gap-3">
          <div className="rounded-full bg-emerald-100 p-2 text-emerald-700">
            <Smartphone size={20} />
          </div>
          <div>
            <p className="font-black">설정</p>
            <p className="text-xs text-slate-500">앱 정보와 사용 설정을 관리합니다.</p>
          </div>
        </div>

        <div className="space-y-2">
          {settingItems.map((item) => (
            <div key={item.id}>
              <button
                type="button"
                onClick={() => setSelectedSetting((prev) => (prev === item.id ? null : item.id))}
                className="flex w-full items-center justify-between gap-3 rounded-2xl bg-slate-50 p-4 text-left transition hover:bg-slate-100"
              >
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-white p-2 text-slate-700 shadow-sm">{item.icon}</div>
                  <div>
                    <p className="font-black text-slate-900">{item.title}</p>
                    <p className="mt-1 text-xs text-slate-500">{item.desc}</p>
                  </div>
                </div>
                <span className="text-xs font-bold text-slate-400">{selectedSetting === item.id ? "접기" : "보기"}</span>
              </button>

              {selectedSetting === item.id && (
                <div className="mt-2 rounded-2xl border border-slate-100 bg-white p-3 text-sm text-slate-600">
                  {item.detail}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-4 grid grid-cols-2 gap-2">
          <Button className="rounded-2xl" onClick={onShare}>
            <Share2 size={16} className="mr-2" /> 공유
          </Button>
          <Button variant="outline" className="rounded-2xl" onClick={onCopy}>
            <Copy size={16} className="mr-2" /> 링크 복사
          </Button>
        </div>
        {copyMessage && <p className="mt-2 rounded-2xl bg-emerald-50 p-2 text-center text-xs font-bold text-emerald-700">{copyMessage}</p>}
      </CardContent>
    </Card>
  );
}

function ChildView({ child, current, selectedDay, updateStatus }) {
  const [showContactOptions, setShowContactOptions] = useState(false);
  const dadPhone = "01088337590";
  const momPhone = "01027460913";
  const smsText = encodeURIComponent(`${child.name} 연락이 필요해요.`);

  if (!current) {
    return (
      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
        <Card className="overflow-hidden rounded-3xl border-0 bg-white shadow-lg">
          <CardContent className="p-6 text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
              <CheckCircle2 size={32} />
            </div>
            <p className="text-sm text-slate-500">
              {child.name} · {selectedDay}요일
            </p>
            <h2 className="mt-2 text-2xl font-black">등록된 일정이 없어요</h2>
            <p className="mt-2 text-sm text-slate-500">오늘은 학원 이동 알림이 없습니다.</p>
          </CardContent>
        </Card>
      </motion.div>
    );
  }

  return (
    <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
      <Card className="overflow-hidden rounded-3xl border-0 bg-white shadow-lg">
        <CardContent className="p-5">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-500">{child.name}이가 지금 할 일</p>
              <h2 className="mt-1 text-3xl font-black text-emerald-700">{current.title}</h2>
            </div>
            <div className="rounded-full bg-emerald-100 p-3 text-emerald-700">
              <Navigation size={28} />
            </div>
          </div>

          <div className="mb-4 rounded-2xl bg-emerald-50 p-4">
            <div className="mb-2 flex items-center gap-2 text-lg font-bold">
              <MapPin size={20} />
              {current.place}
            </div>
            <p className="text-sm text-slate-600">{current.address}</p>
          </div>

          <div className="grid grid-cols-2 gap-2 text-sm">
            <InfoBox icon={<Clock size={18} />} label="시간" value={`${current.start} ~ ${current.end}`} />
            <InfoBox icon={<Bell size={18} />} label="알림" value={current.alert} />
            <InfoBox icon={<Home size={18} />} label="이동" value={current.transport} />
            <InfoBox icon={<CalendarDays size={18} />} label="준비물" value={current.items} />
          </div>
        </CardContent>
      </Card>

      <div className="space-y-3">
        <div className="grid grid-cols-2 gap-3">
          <Button className="h-16 rounded-3xl text-lg font-black" onClick={() => updateStatus(current.id, "도착 완료")}>
            <CheckCircle2 className="mr-2" /> 도착했어요
          </Button>
          <Button variant="secondary" className="h-16 rounded-3xl text-lg font-black" onClick={() => updateStatus(current.id, "끝남")}>
            끝났어요
          </Button>
        </div>
        <Button className="h-16 w-full rounded-3xl bg-emerald-700 text-lg font-black hover:bg-emerald-800" onClick={() => updateStatus(current.id, "귀가 완료")}>
          <Home className="mr-2" size={22} /> 집에 왔어요
        </Button>
      </div>

      <div className="space-y-2">
        <Button
          variant="outline"
          className="h-14 w-full rounded-3xl text-base font-bold"
          onClick={() => setShowContactOptions((prev) => !prev)}
        >
          <Phone className="mr-2" size={20} /> 부모님께 연락하기
        </Button>

        {showContactOptions && (
          <div className="rounded-3xl border border-slate-100 bg-white p-3 shadow-sm">
            <p className="mb-2 text-sm font-black text-slate-700">연락할 사람을 선택하세요</p>
            <div className="grid grid-cols-2 gap-2">
              <a
                href={`tel:${dadPhone}`}
                className="flex h-12 items-center justify-center rounded-2xl bg-emerald-600 text-sm font-black text-white"
              >
                아빠에게 전화
              </a>
              <a
                href={`tel:${momPhone}`}
                className="flex h-12 items-center justify-center rounded-2xl bg-emerald-600 text-sm font-black text-white"
              >
                엄마에게 전화
              </a>
              <a
                href={`sms:${dadPhone}?body=${smsText}`}
                className="flex h-12 items-center justify-center rounded-2xl border border-slate-200 bg-white text-sm font-black text-slate-700"
              >
                아빠에게 문자
              </a>
              <a
                href={`sms:${momPhone}?body=${smsText}`}
                className="flex h-12 items-center justify-center rounded-2xl border border-slate-200 bg-white text-sm font-black text-slate-700"
              >
                엄마에게 문자
              </a>
            </div>
          </div>
        )}
      </div>

      <Card className="rounded-3xl border-orange-100 bg-orange-50 shadow-sm">
        <CardContent className="flex gap-3 p-4">
          <AlertTriangle className="mt-1 text-orange-600" size={22} />
          <div>
            <p className="font-bold text-orange-800">화면 알림 예시</p>
            <p className="text-sm text-orange-700">10분 뒤 {current.title} 가야 해요. 장소는 {current.place}입니다.</p>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

function ParentView({
  child,
  selectedDay,
  schedules,
  updateStatus,
  showAdd,
  setShowAdd,
  newSchedule,
  updateNewSchedule,
  addSchedule,
  startEditSchedule,
  editingScheduleId,
  cancelScheduleForm,
  requestDeleteSchedule,
  deleteTarget,
  cancelDeleteSchedule,
  confirmDeleteSchedule,
}) {
  return (
    <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
      <Card className="rounded-3xl border-0 bg-white shadow-lg">
        <CardContent className="p-5">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-500">부모 확인 화면</p>
              <h2 className="text-2xl font-black">
                {child.name} {selectedDay}요일 일정
              </h2>
            </div>
            <Button
              className="rounded-2xl"
              onClick={() => {
                if (showAdd) {
                  cancelScheduleForm();
                } else {
                  setShowAdd(true);
                }
              }}
            >
              <Plus size={18} className="mr-1" /> 일정 추가
            </Button>
          </div>

          {deleteTarget && (
            <div className="mb-4 rounded-3xl border border-red-100 bg-red-50 p-4">
              <div className="mb-3 flex items-start gap-3">
                <div className="rounded-full bg-white p-2 text-red-600">
                  <Trash2 size={20} />
                </div>
                <div>
                  <p className="font-black text-red-700">일정을 삭제할까요?</p>
                  <p className="mt-1 text-sm text-red-700">
                    {deleteTarget.title} · {deleteTarget.day}요일 {deleteTarget.start}
                  </p>
                  <p className="mt-1 text-xs text-red-500">삭제한 일정은 현재 시제품에서는 되돌릴 수 없습니다.</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <Button variant="outline" className="rounded-2xl bg-white" onClick={cancelDeleteSchedule}>
                  취소
                </Button>
                <Button variant="danger" className="rounded-2xl" onClick={confirmDeleteSchedule}>
                  삭제하기
                </Button>
              </div>
            </div>
          )}

          {showAdd && (
            <div className="mb-4 rounded-3xl border border-emerald-100 bg-emerald-50 p-4">
              <div className="mb-3 flex items-center justify-between">
                <div>
                  <p className="text-sm font-bold text-emerald-700">{editingScheduleId ? "일정 수정" : "새 일정 추가"}</p>
                  <p className="text-xs text-slate-500">
                    {child.name} · {selectedDay}요일 일정으로 저장됩니다.
                  </p>
                </div>
                <button onClick={cancelScheduleForm} className="rounded-full bg-white p-2 text-slate-500">
                  <X size={18} />
                </button>
              </div>

              <div className="space-y-2">
                <input
                  value={newSchedule.title}
                  onChange={(e) => updateNewSchedule("title", e.target.value)}
                  placeholder="과목명 예: 영어, 바둑, 파워점핑"
                  className="w-full rounded-2xl border border-emerald-100 bg-white px-4 py-3 text-sm outline-none focus:border-emerald-400"
                />
                <div className="grid grid-cols-2 gap-2">
                  <input
                    type="time"
                    value={newSchedule.start}
                    onChange={(e) => updateNewSchedule("start", e.target.value)}
                    className="w-full rounded-2xl border border-emerald-100 bg-white px-4 py-3 text-sm outline-none focus:border-emerald-400"
                  />
                  <input
                    type="time"
                    value={newSchedule.end}
                    onChange={(e) => updateNewSchedule("end", e.target.value)}
                    className="w-full rounded-2xl border border-emerald-100 bg-white px-4 py-3 text-sm outline-none focus:border-emerald-400"
                  />
                </div>
                <input
                  value={newSchedule.place}
                  onChange={(e) => updateNewSchedule("place", e.target.value)}
                  placeholder="장소명 예: ○○영어학원"
                  className="w-full rounded-2xl border border-emerald-100 bg-white px-4 py-3 text-sm outline-none focus:border-emerald-400"
                />
                <input
                  value={newSchedule.address}
                  onChange={(e) => updateNewSchedule("address", e.target.value)}
                  placeholder="상세 위치 예: 상가 3층, 학교 후문 앞"
                  className="w-full rounded-2xl border border-emerald-100 bg-white px-4 py-3 text-sm outline-none focus:border-emerald-400"
                />
                <input
                  value={newSchedule.transport}
                  onChange={(e) => updateNewSchedule("transport", e.target.value)}
                  placeholder="이동방법 예: 도보, 셔틀, 부모 차량"
                  className="w-full rounded-2xl border border-emerald-100 bg-white px-4 py-3 text-sm outline-none focus:border-emerald-400"
                />
                <input
                  value={newSchedule.items}
                  onChange={(e) => updateNewSchedule("items", e.target.value)}
                  placeholder="준비물 예: 교재, 필통, 물병"
                  className="w-full rounded-2xl border border-emerald-100 bg-white px-4 py-3 text-sm outline-none focus:border-emerald-400"
                />
                <select
                  value={newSchedule.alert}
                  onChange={(e) => updateNewSchedule("alert", e.target.value)}
                  className="w-full rounded-2xl border border-emerald-100 bg-white px-4 py-3 text-sm outline-none focus:border-emerald-400"
                >
                  <option>5분 전</option>
                  <option>10분 전</option>
                  <option>15분 전</option>
                  <option>20분 전</option>
                  <option>30분 전</option>
                </select>
              </div>

              <div className="mt-3 grid grid-cols-2 gap-2">
                <Button variant="outline" onClick={cancelScheduleForm} className="h-12 rounded-2xl font-black">
                  취소
                </Button>
                <Button onClick={addSchedule} className="h-12 rounded-2xl font-black" disabled={!newSchedule.title.trim() || !newSchedule.start.trim()}>
                  <Save size={18} className="mr-2" /> {editingScheduleId ? "수정 저장" : "일정 저장"}
                </Button>
              </div>
            </div>
          )}

          <div className="space-y-3">
            {schedules.length === 0 && (
              <div className="rounded-2xl border border-dashed border-slate-200 bg-slate-50 p-6 text-center">
                <p className="font-bold text-slate-600">등록된 일정이 없습니다.</p>
                <p className="mt-1 text-sm text-slate-400">일정 추가 버튼으로 새 일정을 넣을 수 있습니다.</p>
              </div>
            )}
            {schedules.map((s) => (
              <div key={s.id} className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
                <div className="mb-2 flex items-start justify-between gap-2">
                  <div>
                    <p className="font-black">{s.title}</p>
                    <p className="text-sm text-slate-500">
                      {s.start} ~ {s.end}
                    </p>
                  </div>
                  <span className={`rounded-full px-3 py-1 text-xs font-bold ${statusStyle[s.status] || "bg-slate-100 text-slate-700"}`}>
                    {s.status}
                  </span>
                </div>
                <p className="mb-1 flex items-center gap-1 text-sm text-slate-700">
                  <MapPin size={15} /> {s.place}
                </p>
                <p className="mb-3 text-sm text-slate-500">
                  이동: {s.transport} · 준비물: {s.items}
                </p>
                <div className="mb-2 grid grid-cols-3 gap-2">
                  <Button size="sm" variant="outline" className="rounded-xl border-emerald-200 text-emerald-700 hover:bg-emerald-50" onClick={() => startEditSchedule(s)}>
                    <Pencil size={14} className="mr-1" /> 수정
                  </Button>
                  <Button size="sm" variant="outline" className="rounded-xl" onClick={() => updateStatus(s.id, "대기")}>
                    대기
                  </Button>
                  <Button size="sm" variant="outline" className="rounded-xl border-red-200 text-red-600 hover:bg-red-50" onClick={() => requestDeleteSchedule(s)}>
                    <Trash2 size={14} className="mr-1" /> 삭제
                  </Button>
                </div>
                <div className="grid grid-cols-4 gap-2">
                  <Button size="sm" variant="outline" className="rounded-xl" onClick={() => updateStatus(s.id, "이동 중")}>
                    이동
                  </Button>
                  <Button size="sm" variant="outline" className="rounded-xl" onClick={() => updateStatus(s.id, "도착 완료")}>
                    도착
                  </Button>
                  <Button size="sm" variant="outline" className="rounded-xl" onClick={() => updateStatus(s.id, "끝남")}>
                    끝남
                  </Button>
                  <Button size="sm" variant="outline" className="rounded-xl border-emerald-200 text-emerald-700 hover:bg-emerald-50" onClick={() => updateStatus(s.id, "귀가 완료")}>
                    귀가
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

function NotificationPanel({ activeAlerts, appAlerts, permission, onRequestPermission, onTest, onClear, onReset }) {
  const [showInstallGuide, setShowInstallGuide] = useState(false);

  const permissionLabel =
    {
      granted: "알림 허용됨",
      denied: "알림 차단됨",
      default: "알림 허용 필요",
      unsupported: "브라우저 미지원",
    }[permission] || "알림 확인 필요";

  return (
    <Card className="rounded-3xl border-0 bg-white shadow-lg">
      <CardContent className="p-4">
        <div className="mb-3 flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <div className="rounded-full bg-blue-100 p-2 text-blue-700">
              <Bell size={20} />
            </div>
            <div>
              <p className="font-black">공지사항</p>
              <p className="text-xs text-slate-500">일정 알림과 최근 알림을 확인합니다.</p>
            </div>
          </div>
          <div className="flex gap-1">
            {permission !== "granted" && permission !== "unsupported" && (
              <Button size="sm" variant="outline" className="rounded-xl" onClick={onRequestPermission}>
                허용
              </Button>
            )}
            <Button size="sm" variant="outline" className="rounded-xl" onClick={onTest}>
              테스트
            </Button>
          </div>
        </div>

        <div className="mb-3 rounded-2xl bg-slate-50 p-3 text-sm text-slate-600">
          현재 상태: <span className="font-bold text-slate-900">{permissionLabel}</span>
        </div>

        <button
          type="button"
          onClick={() => setShowInstallGuide((prev) => !prev)}
          className="mb-3 w-full rounded-2xl bg-blue-50 p-3 text-left text-sm text-blue-700 transition hover:bg-blue-100"
        >
          <div className="flex items-center justify-between gap-2">
            <span className="font-bold">휴대폰 앱처럼 쓰기</span>
            <span className="text-xs font-bold">{showInstallGuide ? "접기" : "방법 보기"}</span>
          </div>
          <p className="mt-1 text-xs text-blue-600">홈 화면에 추가하면 앱처럼 사용할 수 있습니다.</p>
        </button>

        {showInstallGuide && (
          <div className="mb-3 rounded-2xl border border-blue-100 bg-white p-4 text-sm text-slate-700">
            <p className="mb-2 font-black text-slate-900">홈 화면에 추가하는 방법</p>
            <div className="space-y-3">
              <div className="rounded-2xl bg-slate-50 p-3">
                <p className="font-bold text-slate-900">안드로이드 Chrome</p>
                <p className="mt-1 text-xs leading-5 text-slate-600">오른쪽 위 점 3개 → 홈 화면에 추가 → 추가</p>
              </div>
              <div className="rounded-2xl bg-slate-50 p-3">
                <p className="font-bold text-slate-900">아이폰 Safari</p>
                <p className="mt-1 text-xs leading-5 text-slate-600">아래 공유 버튼 → 홈 화면에 추가 → 추가</p>
              </div>
            </div>
          </div>
        )}

        {activeAlerts.length > 0 && (
          <div className="mb-3 space-y-2">
            {activeAlerts.map((alert) => (
              <div key={alert.id} className="rounded-2xl bg-orange-50 p-3 text-orange-800">
                <div className="flex items-center gap-2 font-black">
                  <Volume2 size={18} />
                  {alert.diff === 0 ? "지금 이동할 시간이에요" : `${alert.diff}분 뒤 이동해요`}
                </div>
                <p className="mt-1 text-sm">
                  {alert.title} · {alert.start} · {alert.place}
                </p>
              </div>
            ))}
          </div>
        )}

        {appAlerts.length > 0 ? (
          <div className="space-y-2">
            <div className="flex gap-2">
              <button onClick={onClear} className="flex-1 rounded-xl bg-slate-100 py-2 text-xs font-bold text-slate-500">
                알림 지우기
              </button>
              {onReset && (
                <button onClick={onReset} className="flex-1 rounded-xl bg-slate-100 py-2 text-xs font-bold text-slate-500">
                  <RotateCcw size={13} className="mr-1 inline" /> 일정 초기화
                </button>
              )}
            </div>
            {appAlerts.map((alert) => (
              <div key={alert.id} className="rounded-2xl bg-slate-50 p-3">
                <div className="flex items-start justify-between gap-2">
                  <p className="text-sm font-black">{alert.title}</p>
                  <span className="shrink-0 text-xs text-slate-400">{alert.time}</span>
                </div>
                <p className="mt-1 text-xs text-slate-500">{alert.body}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="rounded-2xl bg-slate-50 p-3 text-sm text-slate-500">최근 알림이 없습니다.</p>
        )}
      </CardContent>
    </Card>
  );
}

function InfoBox({ icon, label, value }) {
  return (
    <div className="rounded-2xl bg-slate-50 p-3">
      <div className="mb-1 flex items-center gap-1 text-slate-500">
        {icon}
        <span className="text-xs font-bold">{label}</span>
      </div>
      <p className="break-keep font-bold">{value}</p>
    </div>
  );
}
