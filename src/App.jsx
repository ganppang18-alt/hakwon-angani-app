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
  KeyRound,
  ListChecks,
  Lock,
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
  Unlock,
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
    default: "bg-rose-400 text-white hover:bg-rose-500",
    secondary: "bg-rose-50 text-rose-900 hover:bg-rose-100",
    outline: "border border-rose-100 bg-white text-slate-700 hover:bg-rose-50",
    danger: "bg-red-500 text-white hover:bg-red-600",
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
  "위치 확인": "bg-cyan-100 text-cyan-700",
  "수업 중": "bg-purple-100 text-purple-700",
  끝남: "bg-zinc-100 text-zinc-500",
  미확인: "bg-red-100 text-red-700",
};

const days = ["월", "화", "수", "목", "금", "토", "일"];

// 가족 전체가 같은 일정을 보려면 Firebase Realtime Database 주소를 입력하세요.
// 예: "https://hakwon-angani-default-rtdb.asia-southeast1.firebasedatabase.app"
// 주소를 비워두면 기존처럼 각 휴대폰에만 저장됩니다.
const FIREBASE_DATABASE_URL = "https://hakwon-angani-default-rtdb.firebaseio.com";
const FAMILY_SHARE_CODE = "han-family";

function isCloudSyncEnabled() {
  return FIREBASE_DATABASE_URL.trim().length > 0;
}

function getCloudUrl() {
  const baseUrl = FIREBASE_DATABASE_URL.replace(/\/$/, "");
  return `${baseUrl}/families/${FAMILY_SHARE_CODE}.json`;
}

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

function getTodayDateLabel(now = new Date()) {
  const year = now.getFullYear();
  const month = now.getMonth() + 1;
  const date = now.getDate();
  const day = getTodayKoreanDay(now);
  return `${year}년 ${month}월 ${date}일 ${day}요일`;
}

function getDateKey(date = new Date()) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function isScheduleForSelectedDate(schedule, selectedDay, selectedDateKey) {
  if (schedule.dateKey) return schedule.dateKey === selectedDateKey;
  return schedule.day === selectedDay;
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

function getNextRemainingSchedule(schedules, nowMinutes = getNowMinutes(), excludeId = null) {
  return [...(schedules || [])]
    .filter((s) => s.id !== excludeId)
    .filter((s) => !["끝남", "귀가 완료"].includes(s.status))
    .filter((s) => timeToMinutes(s.start) > nowMinutes)
    .sort((a, b) => timeToMinutes(a.start) - timeToMinutes(b.start))[0] || null;
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

function loadSavedAlertSetting() {
  try {
    if (typeof localStorage === "undefined") return "10분 전";
    return localStorage.getItem("hakwonDefaultAlert") || "10분 전";
  } catch {
    return "10분 전";
  }
}

function saveAlertSettingToStorage(alertTime) {
  try {
    if (typeof localStorage !== "undefined") {
      localStorage.setItem("hakwonDefaultAlert", alertTime);
    }
  } catch {
    // 저장 공간이 막힌 환경에서는 화면 상태만 유지합니다.
  }
}

function loadSavedLocationChecks() {
  try {
    if (typeof localStorage === "undefined") return {};
    const saved = localStorage.getItem("hakwonLocationChecks");
    return saved ? JSON.parse(saved) : {};
  } catch {
    return {};
  }
}

function saveLocationChecksToStorage(locationChecks) {
  try {
    if (typeof localStorage !== "undefined") {
      localStorage.setItem("hakwonLocationChecks", JSON.stringify(locationChecks));
    }
  } catch {
    // 저장 공간이 막힌 환경에서는 화면 상태만 유지합니다.
  }
}

function loadSavedParentSecurity() {
  try {
    if (typeof localStorage === "undefined") return { password: "", lockEnabled: false };
    const saved = localStorage.getItem("hakwonParentSecurity");
    return saved ? JSON.parse(saved) : { password: "", lockEnabled: false };
  } catch {
    return { password: "", lockEnabled: false };
  }
}

function saveParentSecurityToStorage(parentSecurity) {
  try {
    if (typeof localStorage !== "undefined") {
      localStorage.setItem("hakwonParentSecurity", JSON.stringify(parentSecurity));
    }
  } catch {
    // 저장 공간이 막힌 환경에서는 화면 상태만 유지합니다.
  }
}

function loadSavedHomework() {
  try {
    if (typeof localStorage === "undefined") return [];
    const saved = localStorage.getItem("hakwonHomework");
    return saved ? JSON.parse(saved) : [];
  } catch {
    return [];
  }
}

function loadSavedNotices() {
  try {
    if (typeof localStorage === "undefined") return [];
    const saved = localStorage.getItem("hakwonNotices");
    return saved ? JSON.parse(saved) : [];
  } catch {
    return [];
  }
}

function saveNoticesToStorage(notices) {
  try {
    if (typeof localStorage !== "undefined") {
      localStorage.setItem("hakwonNotices", JSON.stringify(notices));
    }
  } catch {
    // 저장 공간이 막힌 환경에서는 화면 상태만 유지합니다.
  }
}

function saveHomeworkToStorage(homework) {
  try {
    if (typeof localStorage !== "undefined") {
      localStorage.setItem("hakwonHomework", JSON.stringify(homework));
    }
  } catch {
    // 저장 공간이 막힌 환경에서는 화면 상태만 유지합니다.
  }
}

async function loadCloudFamilyData() {
  if (!isCloudSyncEnabled()) return null;
  const response = await fetch(getCloudUrl());
  if (!response.ok) throw new Error("cloud-load-failed");
  return response.json();
}

async function saveCloudFamilyData(data) {
  if (!isCloudSyncEnabled()) return;
  const response = await fetch(getCloudUrl(), {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ...data, updatedAt: new Date().toISOString() }),
  });
  if (!response.ok) throw new Error("cloud-save-failed");
}

function getLocationAccuracyLabel(accuracy) {
  const value = Number(accuracy || 0);
  if (value > 0 && value <= 10) return "매우 정확";
  if (value <= 30) return "양호";
  if (value <= 50) return "대략 확인";
  return "실내라 정확도가 낮을 수 있음";
}

const meaningfulActivityTips = [
  { icon: "📖", title: "10분 독서하기", desc: "좋아하는 책을 한 장이라도 읽어보자." },
  { icon: "✏️", title: "숙제 먼저 확인하기", desc: "오늘 해야 할 숙제가 있는지 가방을 열어보자." },
  { icon: "🎒", title: "가방 정리하기", desc: "내일 필요한 책과 준비물을 미리 챙겨두자." },
  { icon: "🧘", title: "잠깐 쉬면서 숨 고르기", desc: "물 한 잔 마시고 천천히 심호흡해보자." },
  { icon: "🏃", title: "몸을 가볍게 움직이기", desc: "스트레칭이나 제자리 걷기로 몸을 깨워보자." },
  { icon: "💬", title: "엄마 아빠에게 한마디 남기기", desc: "오늘 좋았던 일 하나를 생각해보자." },
];

const parentFamilyReminders = [
  { icon: "💗", title: "오늘은 먼저 안아주기", desc: "일정이 없는 날엔 결과보다 마음을 먼저 물어봐 주세요." },
  { icon: "🌱", title: "작은 용기 칭찬하기", desc: "잘한 일 하나를 찾아 ‘그거 정말 멋졌어’라고 말해 주세요." },
  { icon: "🍚", title: "함께 먹는 시간 만들기", desc: "짧은 간식 시간도 아이에게는 가족의 따뜻한 기억이 됩니다." },
  { icon: "🛋️", title: "쉬어도 괜찮다고 말하기", desc: "바쁜 하루 사이에 쉬는 법을 배우는 것도 중요합니다." },
  { icon: "💬", title: "오늘 기분 묻기", desc: "‘오늘 어땠어?’ 한마디가 아이 마음을 열어줍니다." },
  { icon: "🏠", title: "우리 집 행복 확인하기", desc: "학원보다 중요한 건 아이가 집을 편안한 곳으로 느끼는 것입니다." },
];

const childHopeQuotes = [
  "오늘의 작은 한 걸음이 내일의 멋진 나를 만들어요.",
  "천천히 가도 괜찮아요. 포기하지 않으면 앞으로 가고 있는 거예요.",
  "나는 생각보다 훨씬 잘할 수 있는 아이예요.",
  "실수해도 괜찮아요. 다시 해보는 마음이 진짜 용기예요.",
  "오늘도 나는 조금씩 자라고 있어요.",
  "힘들 땐 잠깐 쉬고, 다시 웃으며 시작하면 돼요.",
];

function getChildHopeQuote(childId, selectedDay) {
  const seed = `${childId}-hope-${selectedDay}`.split("").reduce((sum, char) => sum + char.charCodeAt(0), 0);
  return childHopeQuotes[seed % childHopeQuotes.length];
}

function getMeaningfulActivities(childId, selectedDay) {
  const seed = `${childId}-${selectedDay}`.split("").reduce((sum, char) => sum + char.charCodeAt(0), 0);
  return [0, 1, 2].map((offset) => meaningfulActivityTips[(seed + offset) % meaningfulActivityTips.length]);
}

function getParentFamilyReminders(childId, selectedDay) {
  const seed = `${childId}-parent-${selectedDay}`.split("").reduce((sum, char) => sum + char.charCodeAt(0), 0);
  return [0, 1, 2].map((offset) => parentFamilyReminders[(seed + offset) % parentFamilyReminders.length]);
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
  console.assert(statusStyle["위치 확인"].includes("cyan"), "Location check status should have a visible style");
  const remainingSample = [
    { id: 201, childId: "a", day: "월", start: "09:00", end: "10:00", status: "끝남" },
    { id: 202, childId: "a", day: "월", start: "15:00", end: "16:00", status: "대기" },
  ];
  console.assert(
    getNextRemainingSchedule(remainingSample, 14 * 60)?.id === 202,
    "getNextRemainingSchedule should return the next future unfinished schedule"
  );
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
  const [defaultAlertTime, setDefaultAlertTime] = useState(loadSavedAlertSetting);
  const emptyScheduleForm = {
    title: "",
    place: "",
    address: "",
    start: "",
    end: "",
    transport: "",
    items: "",
    alert: defaultAlertTime,
  };
  const [newSchedule, setNewSchedule] = useState(emptyScheduleForm);
  const [editingScheduleId, setEditingScheduleId] = useState(null);
  const [deleteTarget, setDeleteTarget] = useState(null);
  const [notificationPermission, setNotificationPermission] = useState(
    typeof Notification === "undefined" ? "unsupported" : Notification.permission
  );
  const [sentAlertIds, setSentAlertIds] = useState([]);
  const [appAlerts, setAppAlerts] = useState([]);
  const [urgentAlert, setUrgentAlert] = useState(null);
  const [locationChecks, setLocationChecks] = useState(loadSavedLocationChecks);
  const [parentSecurity, setParentSecurity] = useState(loadSavedParentSecurity);
  const [parentAuthenticated, setParentAuthenticated] = useState(false);
  const [homework, setHomework] = useState(loadSavedHomework);
  const [newHomeworkText, setNewHomeworkText] = useState("");
  const [notices, setNotices] = useState(loadSavedNotices);
  const [newNotice, setNewNotice] = useState({ title: "", body: "" });
  const [syncStatus, setSyncStatus] = useState(isCloudSyncEnabled() ? "공유 연결 중" : "기기 저장 모드");
  const [cloudLoaded, setCloudLoaded] = useState(!isCloudSyncEnabled());
  const [nowTick, setNowTick] = useState(Date.now());
  const [copyMessage, setCopyMessage] = useState("");
  const [activeMenu, setActiveMenu] = useState("home");
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showCalendar, setShowCalendar] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => setNowTick(Date.now()), 30000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    saveSchedulesToStorage(schedules);
  }, [schedules]);

  useEffect(() => {
    saveAlertSettingToStorage(defaultAlertTime);
  }, [defaultAlertTime]);

  useEffect(() => {
    saveLocationChecksToStorage(locationChecks);
  }, [locationChecks]);

  useEffect(() => {
    saveParentSecurityToStorage(parentSecurity);
  }, [parentSecurity]);

  useEffect(() => {
    saveHomeworkToStorage(homework);
  }, [homework]);

  useEffect(() => {
    saveNoticesToStorage(notices);
  }, [notices]);

  useEffect(() => {
    if (!isCloudSyncEnabled()) return;
    let cancelled = false;

    const loadSharedData = async () => {
      try {
        setSyncStatus("가족 일정 불러오는 중");
        const data = await loadCloudFamilyData();
        if (cancelled) return;
        if (data?.schedules) setSchedules(data.schedules);
        if (data?.locationChecks) setLocationChecks(data.locationChecks);
        if (data?.defaultAlertTime) setDefaultAlertTime(data.defaultAlertTime);
        if (data?.parentSecurity) setParentSecurity(data.parentSecurity);
        if (data?.homework) setHomework(data.homework);
        if (data?.notices) setNotices(data.notices);
        setSyncStatus("가족 공유 중");
      } catch {
        if (!cancelled) setSyncStatus("공유 연결 실패 · 기기 저장 중");
      } finally {
        if (!cancelled) setCloudLoaded(true);
      }
    };

    loadSharedData();
    const poller = setInterval(loadSharedData, 15000);

    return () => {
      cancelled = true;
      clearInterval(poller);
    };
  }, []);

  useEffect(() => {
    if (!isCloudSyncEnabled() || !cloudLoaded) return;

    const timer = setTimeout(async () => {
      try {
        await saveCloudFamilyData({ schedules, locationChecks, defaultAlertTime, parentSecurity, homework, notices });
        setSyncStatus("가족 공유 중");
      } catch {
        setSyncStatus("공유 저장 실패 · 다시 시도 필요");
      }
    }, 700);

    return () => clearTimeout(timer);
  }, [schedules, locationChecks, defaultAlertTime, parentSecurity, homework, notices, cloudLoaded]);

  const isParentLockActive = parentSecurity.lockEnabled && parentSecurity.password;

  const saveParentPassword = (password) => {
    const trimmed = String(password || "").trim();
    if (trimmed.length < 4) {
      setAppAlerts((prev) => [
        {
          id: `password-short-${Date.now()}`,
          title: "비밀번호가 너무 짧아요",
          body: "부모용 비밀번호는 4자리 이상으로 만들어주세요.",
          time: new Date().toLocaleTimeString("ko-KR", { hour: "2-digit", minute: "2-digit" }),
        },
        ...prev,
      ].slice(0, 5));
      return false;
    }
    setParentSecurity({ password: trimmed, lockEnabled: true });
    setParentAuthenticated(true);
    setAppAlerts((prev) => [
      {
        id: `password-saved-${Date.now()}`,
        title: "부모용 비밀번호가 저장됐어요",
        body: "부모용 잠금 기능이 켜졌습니다.",
        time: new Date().toLocaleTimeString("ko-KR", { hour: "2-digit", minute: "2-digit" }),
      },
      ...prev,
    ].slice(0, 5));
    return true;
  };

  const toggleParentLock = (enabled) => {
    if (enabled && !parentSecurity.password) {
      setAppAlerts((prev) => [
        {
          id: `lock-needs-password-${Date.now()}`,
          title: "비밀번호를 먼저 만들어주세요",
          body: "비밀번호 생성 후 부모용 잠금을 켤 수 있습니다.",
          time: new Date().toLocaleTimeString("ko-KR", { hour: "2-digit", minute: "2-digit" }),
        },
        ...prev,
      ].slice(0, 5));
      return false;
    }
    setParentSecurity((prev) => ({ ...prev, lockEnabled: enabled }));
    setParentAuthenticated(!enabled);
    return true;
  };

  const unlockParentMode = (password) => {
    if (String(password || "").trim() === parentSecurity.password) {
      setParentAuthenticated(true);
      return true;
    }
    return false;
  };

  const addHomework = () => {
    const text = newHomeworkText.trim();
    if (!text) return;
    setHomework((prev) => [
      {
        id: Date.now(),
        childId: selectedChild,
        day: selectedDay,
        text,
        done: false,
        createdAt: new Date().toISOString(),
      },
      ...prev,
    ]);
    setNewHomeworkText("");
  };

  const addNotice = () => {
    const title = newNotice.title.trim();
    const body = newNotice.body.trim();
    if (!title && !body) return;
    setNotices((prev) => [
      {
        id: Date.now(),
        title: title || "가족 공지",
        body,
        author: "부모님",
        createdAt: new Date().toISOString(),
        time: new Date().toLocaleString("ko-KR", {
          month: "numeric",
          day: "numeric",
          hour: "2-digit",
          minute: "2-digit",
        }),
      },
      ...prev,
    ]);
    setNewNotice({ title: "", body: "" });
  };

  const deleteNotice = (id) => {
    setNotices((prev) => prev.filter((notice) => notice.id !== id));
  };

  const toggleHomework = (id) => {
    setHomework((prev) => prev.map((item) => (item.id === id ? { ...item, done: !item.done } : item)));
  };

  const deleteHomework = (id) => {
    setHomework((prev) => prev.filter((item) => item.id !== id));
  };

  const child = children.find((c) => c.id === selectedChild);
  const selectedDateKey = useMemo(() => getDateKey(selectedDate), [selectedDate]);

  const todaySchedules = useMemo(
    () =>
      schedules
        .filter((s) => s.childId === selectedChild && isScheduleForSelectedDate(s, selectedDay, selectedDateKey))
        .sort((a, b) => timeToMinutes(a.start) - timeToMinutes(b.start)),
    [schedules, selectedChild, selectedDay, selectedDateKey]
  );

  const current = useMemo(
    () => getCurrentSchedule(todaySchedules, selectedChild, selectedDay),
    [todaySchedules, selectedChild, selectedDay, nowTick]
  );

  const activeAlerts = useMemo(
    () => getActiveAlerts(todaySchedules, selectedChild, selectedDay),
    [todaySchedules, selectedChild, selectedDay, nowTick]
  );
  const todayHomework = useMemo(
    () => homework.filter((item) => item.childId === selectedChild && item.day === selectedDay),
    [homework, selectedChild, selectedDay]
  );
  const todayDateLabel = useMemo(() => getTodayDateLabel(selectedDate), [selectedDate]);

  const selectCalendarDate = (date) => {
    setSelectedDate(date);
    setSelectedDay(getTodayKoreanDay(date));
    setShowCalendar(false);
  };

  useEffect(() => {
    activeAlerts.forEach((alert) => {
      const alertId = `${alert.id}-${alert.day}-${alert.start}`;
      if (sentAlertIds.includes(alertId)) return;

      const childName = children.find((c) => c.id === alert.childId)?.name || "아이";
      const title = `${childName}, ${alert.title} 갈 시간이에요`;
      const body = `${alert.start} 시작 · 장소: ${alert.place}`;

      const alertTimeText = new Date().toLocaleTimeString("ko-KR", { hour: "2-digit", minute: "2-digit" });
      const alertData = {
        id: alertId,
        title,
        body,
        time: alertTimeText,
        childName,
        scheduleTitle: alert.title,
        start: alert.start,
        place: alert.place,
        diff: alert.diff,
      };

      setUrgentAlert(alertData);

      setAppAlerts((prev) => [alertData, ...prev].slice(0, 5));

      try {
        if (typeof navigator !== "undefined" && typeof navigator.vibrate === "function") {
          navigator.vibrate([250, 120, 250, 120, 250]);
        }
      } catch {
        // 진동이 지원되지 않아도 앱은 계속 동작합니다.
      }

      try {
        if (notificationPermission === "granted" && typeof Notification !== "undefined") {
          new Notification(title, {
            body,
            tag: alertId,
            requireInteraction: true,
            silent: false,
          });
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

  const saveLocationCheck = (scheduleId, locationData) => {
    setLocationChecks((prev) => ({ ...prev, [scheduleId]: locationData }));
    updateStatus(scheduleId, "위치 확인");
    setAppAlerts((prev) => [
      {
        id: `location-${scheduleId}-${Date.now()}`,
        title: "위치가 확인됐어요",
        body: `${locationData.place || "장소 확인"} · ${locationData.time} · 위치 상태: ${getLocationAccuracyLabel(locationData.accuracy)}`,
        time: locationData.time,
      },
      ...prev,
    ].slice(0, 5));
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
      dateKey: selectedDateKey,
      dateLabel: getTodayDateLabel(selectedDate),
      dateKey: selectedDateKey,
      dateLabel: getTodayDateLabel(selectedDate),
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

  const changeDefaultAlertTime = (value) => {
    setDefaultAlertTime(value);
    setNewSchedule((prev) => ({ ...prev, alert: value }));
    setSchedules((prev) => prev.map((s) => ({ ...s, alert: value })));
    setAppAlerts((prev) => [
      {
        id: `alert-setting-${Date.now()}`,
        title: "알림 시간이 변경됐어요",
        body: `모든 일정 알림이 ${value}으로 설정되었습니다.`,
        time: new Date().toLocaleTimeString("ko-KR", { hour: "2-digit", minute: "2-digit" }),
      },
      ...prev,
    ].slice(0, 5));
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
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-rose-50 via-orange-50 to-amber-50 text-slate-900">
      <div className="pointer-events-none absolute -top-12 -left-10 h-44 w-44 rounded-full bg-rose-200/30 blur-3xl" />
      <div className="pointer-events-none absolute top-36 -right-16 h-52 w-52 rounded-full bg-amber-200/35 blur-3xl" />
      <div className="pointer-events-none absolute bottom-24 left-8 h-36 w-36 rounded-full bg-pink-200/25 blur-3xl" />
      <div className="pointer-events-none absolute right-7 top-28 text-5xl opacity-[0.06]">💗</div>
      <div className="pointer-events-none absolute left-6 top-[430px] text-4xl opacity-[0.05]">🏠</div>
      <div className="pointer-events-none absolute bottom-10 right-10 text-5xl opacity-[0.05]">🎒</div>
      {urgentAlert && <UrgentAlertOverlay alert={urgentAlert} onClose={() => setUrgentAlert(null)} />}

      <div className="relative z-10 mx-auto max-w-md px-3 py-3">
        <header className="mb-3 flex items-start justify-between gap-2 rounded-3xl bg-white/70 p-3 shadow-sm backdrop-blur">
          <div>
            <p className="text-xs font-bold text-rose-400">초등학생 동선 알림앱</p>
            <h1 className="flex items-center text-2xl font-black tracking-tight text-slate-900">
              <span className="relative mr-2 inline-flex h-9 w-8 items-end justify-center text-3xl leading-none">
                <span className="absolute -top-1 left-0 text-[10px] leading-none">💗</span>
                <span className="absolute -top-2 right-0 text-[10px] leading-none">💗</span>
                <span>👩</span>
              </span>
              학원 안가니?
              <span className="relative ml-2 inline-flex h-9 w-8 items-end justify-center text-3xl leading-none">
                <span className="absolute -top-1 left-0 text-[10px] leading-none">💙</span>
                <span className="absolute -top-2 right-0 text-[10px] leading-none">💙</span>
                <span>👨</span>
              </span>
            </h1>
          </div>

          <div className="mt-0 flex shrink-0 flex-col items-end gap-1.5">
            <p className="rounded-full bg-rose-50 px-2.5 py-1 text-[10px] font-black text-rose-400 shadow-sm">
              {syncStatus}
            </p>
            <div className="mt-1 grid grid-cols-2 rounded-2xl border border-rose-100 bg-white p-0.5 shadow-sm">
            <button
              onClick={() => {
                setRole("child");
                setParentAuthenticated(false);
              }}
              className={`rounded-xl px-2 py-1 text-[10px] font-black transition ${
                role === "child" ? "bg-rose-400 text-white shadow" : "text-slate-500"
              }`}
            >
              아이용
            </button>
            <button
              onClick={() => {
                setRole("parent");
                if (isParentLockActive) setParentAuthenticated(false);
              }}
              className={`rounded-xl px-2 py-1 text-[10px] font-black transition ${
                role === "parent" ? "bg-rose-400 text-white shadow" : "text-slate-500"
              }`}
            >
              부모용
            </button>
            </div>
          </div>
        </header>

        <div className="mb-2 grid grid-cols-2 gap-2">
          {children.map((c) => (
            <button
              key={c.id}
              onClick={() => setSelectedChild(c.id)}
              className={`rounded-2xl border p-3 text-left shadow-sm transition ${
                selectedChild === c.id ? "border-rose-300 bg-rose-100" : "border-rose-100 bg-white/80"
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

        <TodayDateBadge todayDateLabel={todayDateLabel} onClick={() => setShowCalendar((prev) => !prev)} />

        {showCalendar && (
          <CalendarPicker
            selectedDate={selectedDate}
            onSelectDate={selectCalendarDate}
            onClose={() => setShowCalendar(false)}
          />
        )}

        <div className="mb-2 grid grid-cols-7 gap-1">
          {days.map((day) => (
            <button
              key={day}
              onClick={() => setSelectedDay(day)}
              className={`rounded-2xl py-2 text-[12px] font-black transition ${
                selectedDay === day ? "bg-rose-400 text-white shadow" : "border border-rose-100 bg-white/80 text-slate-500"
              }`}
            >
              {day}
            </button>
          ))}
        </div>

        <MainMenu activeMenu={activeMenu} setActiveMenu={setActiveMenu} />

        {activeMenu === "home" &&
          (role === "child" ? (
            <ChildView
              child={child}
              current={current}
              selectedDay={selectedDay}
              updateStatus={updateStatus}
              schedules={todaySchedules}
              locationChecks={locationChecks}
              saveLocationCheck={saveLocationCheck}
              showAdd={showAdd}
              setShowAdd={setShowAdd}
              newSchedule={newSchedule}
              updateNewSchedule={updateNewSchedule}
              addSchedule={addSchedule}
              cancelScheduleForm={cancelScheduleForm}
              selectedDateLabel={todayDateLabel}
            />
          ) : isParentLockActive && !parentAuthenticated ? (
            <ParentLockScreen onUnlock={unlockParentMode} onBackToChild={() => setRole("child")} />
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
              locationChecks={locationChecks}
            />
          ))}

        {activeMenu === "homework" && (
          <HomeworkPanel
            child={child}
            selectedDay={selectedDay}
            homework={todayHomework}
            newHomeworkText={newHomeworkText}
            setNewHomeworkText={setNewHomeworkText}
            addHomework={addHomework}
            toggleHomework={toggleHomework}
            deleteHomework={deleteHomework}
            role={role}
          />
        )}

        {activeMenu === "notice" && (
          <NotificationPanel
            activeAlerts={activeAlerts}
            appAlerts={appAlerts}
            permission={notificationPermission}
            onRequestPermission={requestNotificationPermission}
            onTest={testNotification}
            onClear={clearAppAlerts}
            onReset={resetSchedules}
            notices={notices}
            newNotice={newNotice}
            setNewNotice={setNewNotice}
            addNotice={addNotice}
            deleteNotice={deleteNotice}
            role={role}
          />
        )}

        {activeMenu === "settings" && (
          <WebAppGuidePanel
            onCopy={copyAppLink}
            onShare={shareApp}
            copyMessage={copyMessage}
            defaultAlertTime={defaultAlertTime}
            onDefaultAlertTimeChange={changeDefaultAlertTime}
            parentSecurity={parentSecurity}
            onSaveParentPassword={saveParentPassword}
            onToggleParentLock={toggleParentLock}
          />
        )}
      </div>
    </div>
  );
}

function UrgentAlertOverlay({ alert, onClose }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/45 px-4 backdrop-blur-sm">
      <motion.div
        initial={{ opacity: 0, scale: 0.94, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        className="w-full max-w-sm rounded-[2rem] border border-rose-100 bg-white p-5 text-center shadow-2xl"
      >
        <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-rose-100 text-3xl">
          🔔
        </div>
        <p className="text-xs font-black text-rose-400">일정 알림</p>
        <h2 className="mt-2 break-keep text-2xl font-black leading-8 text-slate-900">
          {alert.diff === 0 ? "지금 이동할 시간이에요" : `${alert.diff}분 뒤 이동해요`}
        </h2>
        <div className="mt-4 rounded-3xl bg-rose-50 p-4 text-left">
          <p className="text-xs font-bold text-rose-400">{alert.childName}</p>
          <p className="mt-1 text-xl font-black text-rose-600">{alert.scheduleTitle}</p>
          <p className="mt-2 text-sm font-bold text-slate-700">시간: {alert.start}</p>
          <p className="mt-1 text-sm font-bold text-slate-700">장소: {alert.place}</p>
        </div>
        <p className="mt-3 break-keep text-xs leading-5 text-slate-500">
          휴대폰 알림 권한이 허용되어 있으면 화면 밖에서도 알림이 표시될 수 있습니다.
        </p>
        <Button className="mt-4 h-12 w-full rounded-3xl text-base font-black" onClick={onClose}>
          확인했어요
        </Button>
      </motion.div>
    </div>
  );
}

function TodayDateBadge({ todayDateLabel, onClick }) {
  return (
    <div className="mb-2 flex justify-center">
      <button
        type="button"
        onClick={onClick}
        className="inline-flex items-center gap-1 rounded-2xl border border-rose-100 bg-white/80 px-4 py-2 text-[12px] font-black text-rose-400 shadow-sm transition hover:bg-rose-50"
      >
        <CalendarDays size={15} />
        {todayDateLabel}
      </button>
    </div>
  );
}

function CalendarPicker({ selectedDate, onSelectDate, onClose }) {
  const [viewDate, setViewDate] = useState(() => new Date(selectedDate.getFullYear(), selectedDate.getMonth(), 1));
  const year = viewDate.getFullYear();
  const month = viewDate.getMonth();
  const firstDay = new Date(year, month, 1);
  const startOffset = firstDay.getDay();
  const lastDate = new Date(year, month + 1, 0).getDate();
  const cells = [];

  for (let i = 0; i < startOffset; i += 1) cells.push(null);
  for (let date = 1; date <= lastDate; date += 1) cells.push(new Date(year, month, date));
  while (cells.length % 7 !== 0) cells.push(null);

  const moveMonth = (amount) => {
    setViewDate((prev) => new Date(prev.getFullYear(), prev.getMonth() + amount, 1));
  };

  const isSameDate = (a, b) =>
    a && b && a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();

  const today = new Date();

  return (
    <div className="mb-2 rounded-[2rem] border border-rose-100 bg-white/95 p-3 shadow-lg shadow-rose-100/70 backdrop-blur">
      <div className="mb-3 flex items-center justify-between">
        <button
          type="button"
          onClick={() => moveMonth(-1)}
          className="rounded-full bg-rose-50 px-3 py-2 text-sm font-black text-rose-500"
        >
          이전
        </button>
        <div className="text-center">
          <p className="text-xs font-bold text-rose-400">달력 선택</p>
          <p className="text-lg font-black text-slate-900">{year}년 {month + 1}월</p>
        </div>
        <button
          type="button"
          onClick={() => moveMonth(1)}
          className="rounded-full bg-rose-50 px-3 py-2 text-sm font-black text-rose-500"
        >
          다음
        </button>
      </div>

      <div className="mb-1 grid grid-cols-7 gap-1 text-center text-[11px] font-black text-slate-400">
        {["일", "월", "화", "수", "목", "금", "토"].map((day) => (
          <div key={day} className={day === "일" ? "text-red-300" : day === "토" ? "text-blue-300" : ""}>
            {day}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-1">
        {cells.map((date, index) => {
          if (!date) return <div key={`empty-${index}`} className="h-10" />;
          const selected = isSameDate(date, selectedDate);
          const todayMatch = isSameDate(date, today);
          return (
            <button
              key={date.toISOString()}
              type="button"
              onClick={() => onSelectDate(date)}
              className={`h-10 rounded-2xl text-sm font-black transition ${
                selected
                  ? "bg-rose-400 text-white shadow"
                  : todayMatch
                    ? "border border-rose-200 bg-rose-50 text-rose-500"
                    : "bg-orange-50/60 text-slate-600 hover:bg-rose-50"
              }`}
            >
              {date.getDate()}
            </button>
          );
        })}
      </div>

      <div className="mt-3 grid grid-cols-2 gap-2">
        <Button variant="outline" className="rounded-2xl" onClick={onClose}>
          닫기
        </Button>
        <Button className="rounded-2xl" onClick={() => onSelectDate(new Date())}>
          오늘로 이동
        </Button>
      </div>
    </div>
  );
}

function ParentLockScreen({ onUnlock, onBackToChild }) {
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const submit = () => {
    const ok = onUnlock(password);
    if (!ok) {
      setMessage("비밀번호가 맞지 않아요. 다시 입력해주세요.");
      setPassword("");
      return;
    }
    setMessage("");
  };

  return (
    <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
      <Card className="rounded-[2rem] border border-rose-100 bg-white/90 shadow-lg shadow-rose-100/70">
        <CardContent className="p-5 text-center">
          <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-rose-100 text-rose-500">
            <Lock size={30} />
          </div>
          <p className="text-xs font-bold text-rose-400">부모용 잠금</p>
          <h2 className="mt-2 text-2xl font-black text-slate-900">비밀번호를 입력해주세요</h2>
          <p className="mt-2 break-keep text-sm leading-6 text-slate-500">
            부모용 화면은 일정 추가·수정이 가능해서 비밀번호로 보호하고 있어요.
          </p>

          <input
            type="password"
            inputMode="numeric"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") submit();
            }}
            placeholder="비밀번호"
            className="mt-4 w-full rounded-3xl border border-rose-100 bg-rose-50 px-4 py-4 text-center text-lg font-black tracking-widest outline-none focus:border-rose-300"
          />

          {message && <p className="mt-3 rounded-2xl bg-red-50 p-3 text-sm font-bold text-red-500">{message}</p>}

          <div className="mt-4 grid grid-cols-2 gap-2">
            <Button variant="outline" className="h-12 rounded-3xl" onClick={onBackToChild}>
              아이용으로 돌아가기
            </Button>
            <Button className="h-12 rounded-3xl" onClick={submit}>
              확인
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

function MainMenu({ activeMenu, setActiveMenu }) {
  const menus = [
    { id: "home", label: "홈", icon: <Home size={16} /> },
    { id: "homework", label: "숙제하기", icon: <ListChecks size={16} /> },
    { id: "notice", label: "공지사항", icon: <Bell size={16} /> },
    { id: "settings", label: "설정", icon: <Smartphone size={16} /> },
  ];

  return (
    <div className="mb-2 grid grid-cols-4 rounded-3xl border border-rose-100 bg-white/80 p-1 shadow-sm">
      {menus.map((menu) => (
        <button
          key={menu.id}
          onClick={() => setActiveMenu(menu.id)}
          className={`flex items-center justify-center gap-1 rounded-2xl py-3 text-[12px] font-black transition ${
            activeMenu === menu.id ? "bg-rose-400 text-white shadow" : "text-slate-500"
          }`}
        >
          {menu.icon}
          {menu.label}
        </button>
      ))}
    </div>
  );
}

function HomeworkPanel({
  child,
  selectedDay,
  homework,
  newHomeworkText,
  setNewHomeworkText,
  addHomework,
  toggleHomework,
  deleteHomework,
  role,
}) {
  const doneCount = homework.filter((item) => item.done).length;
  const totalCount = homework.length;

  return (
    <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="space-y-3">
      <Card className="rounded-[2rem] border border-rose-100 bg-white/90 shadow-lg shadow-rose-100/70">
        <CardContent className="p-4">
          <div className="mb-3 flex items-center justify-between gap-3">
            <div>
              <p className="text-xs font-bold text-rose-400">
                {child.name} · {selectedDay}요일
              </p>
              <h2 className="mt-1 text-2xl font-black text-slate-900">숙제하기</h2>
              <p className="mt-1 break-keep text-xs leading-5 text-slate-500">
                생각난 숙제를 바로 적고, 끝나면 체크해요.
              </p>
            </div>
            <div className="rounded-full bg-rose-50 px-3 py-2 text-center text-xs font-black text-rose-500">
              {doneCount}/{totalCount}
              <br />완료
            </div>
          </div>

          <div className="flex gap-2">
            <input
              value={newHomeworkText}
              onChange={(e) => setNewHomeworkText(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") addHomework();
              }}
              placeholder="예: 수학 35쪽 풀기"
              className="min-w-0 flex-1 rounded-2xl border border-rose-100 bg-rose-50 px-4 py-3 text-sm font-bold outline-none focus:border-rose-300"
            />
            <Button className="shrink-0 rounded-2xl" onClick={addHomework} disabled={!newHomeworkText.trim()}>
              추가
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card className="rounded-[2rem] border border-orange-100 bg-white/90 shadow-md shadow-orange-100/60">
        <CardContent className="p-4">
          {homework.length === 0 ? (
            <div className="rounded-3xl bg-orange-50/70 p-5 text-center">
              <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-white text-2xl shadow-sm">
                ✏️
              </div>
              <p className="text-lg font-black text-slate-900">아직 적어둔 숙제가 없어요</p>
              <p className="mt-2 break-keep text-sm leading-6 text-slate-500">
                떠오르는 숙제를 하나 적어두면 잊지 않고 해낼 수 있어요.
              </p>
            </div>
          ) : (
            <div className="space-y-2">
              {homework.map((item) => (
                <div
                  key={item.id}
                  className={`flex items-center gap-3 rounded-3xl p-3 shadow-sm ${item.done ? "bg-emerald-50" : "bg-orange-50/70"}`}
                >
                  <button
                    type="button"
                    onClick={() => toggleHomework(item.id)}
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full font-black ${
                      item.done ? "bg-emerald-500 text-white" : "bg-white text-orange-400"
                    }`}
                  >
                    {item.done ? <CheckCircle2 size={22} /> : "○"}
                  </button>
                  <div className="min-w-0 flex-1">
                    <p className={`break-keep font-black ${item.done ? "text-emerald-700 line-through" : "text-slate-900"}`}>
                      {item.text}
                    </p>
                    <p className="mt-0.5 text-xs font-bold text-slate-400">{item.done ? "완료했어요" : "아직 해야 해요"}</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => deleteHomework(item.id)}
                    className="rounded-full bg-white p-2 text-slate-300 hover:text-red-400"
                    title="숙제 삭제"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              ))}
            </div>
          )}

          <div className="mt-3 rounded-3xl bg-rose-50 p-3 text-center text-xs font-bold leading-5 text-rose-500">
            {role === "child"
              ? "작게 적고 하나씩 체크하면 어려운 숙제도 끝낼 수 있어요."
              : "아이가 스스로 적고 체크한 숙제를 함께 응원해주세요."}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

function WebAppGuidePanel({
  onCopy,
  onShare,
  copyMessage,
  defaultAlertTime,
  onDefaultAlertTimeChange,
  parentSecurity,
  onSaveParentPassword,
  onToggleParentLock,
}) {
  const [selectedSetting, setSelectedSetting] = useState(null);
  const [passwordInput, setPasswordInput] = useState("");
  const [passwordMessage, setPasswordMessage] = useState("");

  const handleSavePassword = () => {
    const ok = onSaveParentPassword(passwordInput);
    setPasswordMessage(ok ? "부모용 비밀번호가 저장되고 잠금이 켜졌어요." : "비밀번호는 4자리 이상으로 만들어주세요.");
    if (ok) setPasswordInput("");
    setTimeout(() => setPasswordMessage(""), 2500);
  };

  const handleToggleLock = (enabled) => {
    const ok = onToggleParentLock(enabled);
    setPasswordMessage(ok ? (enabled ? "부모용 잠금이 켜졌어요." : "부모용 잠금이 해제됐어요.") : "비밀번호를 먼저 만들어주세요.");
    setTimeout(() => setPasswordMessage(""), 2500);
  };

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
      detail: "알림 시간을 선택하면 모든 일정에 바로 반영됩니다.",
    },
    {
      id: "parentLock",
      title: "부모용 잠금",
      desc: parentSecurity?.lockEnabled ? "부모용 화면이 비밀번호로 보호 중입니다." : "부모용 화면 잠금을 설정할 수 있습니다.",
      icon: parentSecurity?.lockEnabled ? <Lock size={20} /> : <Unlock size={20} />,
      detail: "비밀번호를 만들면 부모용 화면에 들어갈 때 비밀번호 확인이 필요합니다.",
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
      detail: isCloudSyncEnabled()
        ? "현재 버전은 가족 공유 저장소와 연결되어 엄마·아빠·아이 화면에서 같은 일정을 볼 수 있습니다."
        : "현재 버전은 기기별 저장 모드입니다. Firebase 주소를 입력하면 가족 공유 모드로 사용할 수 있습니다.",
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
                  {item.id === "alarm" ? (
                    <div className="space-y-3">
                      <p>{item.detail}</p>
                      <select
                        value={defaultAlertTime}
                        onChange={(e) => onDefaultAlertTimeChange(e.target.value)}
                        className="w-full rounded-2xl border border-emerald-100 bg-white px-4 py-3 text-sm font-bold outline-none focus:border-emerald-400"
                      >
                        <option>5분 전</option>
                        <option>10분 전</option>
                        <option>15분 전</option>
                        <option>20분 전</option>
                        <option>30분 전</option>
                      </select>
                      <p className="rounded-2xl bg-emerald-50 p-3 text-xs font-bold text-emerald-700">
                        현재 기본 알림: {defaultAlertTime}
                      </p>
                    </div>
                  ) : item.id === "parentLock" ? (
                    <div className="space-y-3">
                      <p>{item.detail}</p>
                      <div className="rounded-2xl bg-rose-50 p-3 text-xs font-bold text-rose-600">
                        현재 상태: {parentSecurity?.lockEnabled ? "잠금 켜짐" : "잠금 해제"}
                      </div>
                      <div className="flex gap-2">
                        <input
                          type="password"
                          inputMode="numeric"
                          value={passwordInput}
                          onChange={(e) => setPasswordInput(e.target.value)}
                          placeholder="새 비밀번호 4자리 이상"
                          className="min-w-0 flex-1 rounded-2xl border border-rose-100 bg-white px-4 py-3 text-sm font-bold outline-none focus:border-rose-300"
                        />
                        <Button className="shrink-0 rounded-2xl" onClick={handleSavePassword}>
                          저장
                        </Button>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <Button
                          variant={parentSecurity?.lockEnabled ? "secondary" : "outline"}
                          className="rounded-2xl"
                          onClick={() => handleToggleLock(true)}
                        >
                          <Lock size={16} className="mr-1" /> 잠금
                        </Button>
                        <Button
                          variant={!parentSecurity?.lockEnabled ? "secondary" : "outline"}
                          className="rounded-2xl"
                          onClick={() => handleToggleLock(false)}
                        >
                          <Unlock size={16} className="mr-1" /> 해제
                        </Button>
                      </div>
                      {passwordMessage && (
                        <p className="rounded-2xl bg-slate-50 p-3 text-xs font-bold text-slate-600">{passwordMessage}</p>
                      )}
                    </div>
                  ) : (
                    item.detail
                  )}
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

function ChildView({
  child,
  current,
  selectedDay,
  updateStatus,
  schedules,
  locationChecks,
  saveLocationCheck,
  showAdd,
  setShowAdd,
  newSchedule,
  updateNewSchedule,
  addSchedule,
  cancelScheduleForm,
  selectedDateLabel,
}) {
  const [showContactOptions, setShowContactOptions] = useState(false);
  const [locationMessage, setLocationMessage] = useState("");
  const [isCheckingLocation, setIsCheckingLocation] = useState(false);
  const dadPhone = "01088337590";
  const momPhone = "01027460913";
  const smsText = encodeURIComponent(`${child.name} 연락이 필요해요.`);
  const nextSchedule = getNextRemainingSchedule(schedules, getNowMinutes(), current?.id);
  const currentLocationCheck = current ? locationChecks?.[current.id] : null;

  const checkCurrentLocation = () => {
    if (!current) return;
    if (typeof navigator === "undefined" || !navigator.geolocation) {
      setLocationMessage("이 브라우저에서는 위치 확인을 지원하지 않아요.");
      return;
    }

    setIsCheckingLocation(true);
    setLocationMessage("현재 위치를 확인하는 중이에요...");

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const locationData = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          accuracy: Math.round(position.coords.accuracy || 0),
          time: new Date().toLocaleTimeString("ko-KR", { hour: "2-digit", minute: "2-digit" }),
          scheduleTitle: current.title,
          place: current.place,
          address: current.address,
        };
        saveLocationCheck(current.id, locationData);
        setLocationMessage("위치 확인이 완료됐어요.");
        setIsCheckingLocation(false);
      },
      () => {
        setLocationMessage("위치 권한이 거부되었거나 위치를 확인할 수 없어요.");
        setIsCheckingLocation(false);
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0,
      }
    );
  }; 

  if (!current) {
    const activityTips = getMeaningfulActivities(child.id, selectedDay);

    return (
      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="space-y-3">
        <Card className="overflow-hidden rounded-[2rem] border border-rose-100 bg-white/90 shadow-lg shadow-rose-100/70">
          <CardContent className="p-5 text-center">
            <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-rose-100 text-2xl">
              🌷
            </div>
            <p className="text-xs font-bold text-rose-400">
              {child.name} · {selectedDay}요일
            </p>
            <h2 className="mt-2 text-2xl font-black text-slate-900">오늘은 여유 시간이 있어요</h2>
            <p className="mt-2 break-keep text-sm leading-6 text-slate-500">
              학원 일정이 없는 날에는 스스로 할 일을 하나 골라보면 멋져요.
            </p>
          </CardContent>
        </Card>

        <ChildScheduleAddBox
          showAdd={showAdd}
          setShowAdd={setShowAdd}
          newSchedule={newSchedule}
          updateNewSchedule={updateNewSchedule}
          addSchedule={addSchedule}
          cancelScheduleForm={cancelScheduleForm}
          selectedDateLabel={selectedDateLabel}
          child={child}
        />

        <Card className="rounded-[2rem] border border-orange-100 bg-white/90 shadow-md shadow-orange-100/60">
          <CardContent className="p-4">
            <div className="mb-3 flex items-center justify-between">
              <div>
                <p className="text-xs font-bold text-orange-400">오늘 스스로 해볼 일</p>
                <p className="text-lg font-black text-slate-900">작은 실천 3가지</p>
              </div>
              <span className="rounded-full bg-orange-50 px-3 py-1 text-xs font-black text-orange-500">혼자서도 OK</span>
            </div>

            <div className="space-y-2">
              {activityTips.map((tip) => (
                <div key={tip.title} className="flex items-center gap-3 rounded-3xl bg-orange-50/70 p-3 text-left">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-xl shadow-sm">
                    {tip.icon}
                  </div>
                  <div>
                    <p className="font-black text-slate-900">{tip.title}</p>
                    <p className="mt-0.5 break-keep text-xs leading-5 text-slate-500">{tip.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <ChildHopeQuote child={child} selectedDay={selectedDay} />
      </motion.div>
    );
  }

  return (
    <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
      <Card className="overflow-hidden rounded-[2rem] border border-rose-100 bg-white/90 shadow-lg shadow-rose-100/70">
        <CardContent className="p-4">
          <div className="mb-3 flex items-center justify-between">
            <div>
              <p className="text-xs font-bold text-slate-400">{child.name}이가 지금 할 일</p>
              <h2 className="mt-1 text-3xl font-black text-rose-500">{current.title}</h2>
            </div>
            <button
              type="button"
              onClick={checkCurrentLocation}
              disabled={isCheckingLocation}
              className="rounded-full bg-rose-100 p-3 text-rose-500 transition hover:bg-rose-200 disabled:opacity-60"
              title="위치 확인"
            >
              <Navigation size={28} />
            </button>
          </div>

          <div className="mb-3 rounded-3xl bg-rose-50 p-3">
            <div className="mb-1 flex items-center gap-2 text-base font-black">
              <MapPin size={20} />
              {current.place}
            </div>
            <p className="text-xs text-slate-500">{current.address}</p>
          </div>

          <div className="grid grid-cols-2 gap-1.5 text-sm">
            <InfoBox compact icon={<Clock size={16} />} label="시간" value={`${current.start} ~ ${current.end}`} />
            <InfoBox compact icon={<Bell size={16} />} label="알림" value={current.alert} />
            <InfoBox compact icon={<Home size={16} />} label="이동" value={current.transport} />
            <InfoBox compact icon={<CalendarDays size={16} />} label="준비물" value={current.items} />
          </div>

          {(locationMessage || currentLocationCheck) && (
            <div className="mt-3 rounded-2xl border border-cyan-100 bg-cyan-50 p-3 text-sm text-cyan-800">
              <p className="font-bold">{locationMessage || "위치 확인 완료"}</p>
              {currentLocationCheck && (
                <div className="mt-1 text-xs leading-5 text-cyan-700">
                  <p>장소: {currentLocationCheck.place || current.place}</p>
                  <p>상세 위치: {currentLocationCheck.address || current.address}</p>
                  <p>확인 시간: {currentLocationCheck.time}</p>
                  <p>위치 상태: {getLocationAccuracyLabel(currentLocationCheck.accuracy)}</p>
                </div>
              )}
            </div>
          )}

          <div className="mt-2 rounded-3xl bg-pink-50 p-3 text-pink-900">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-xs font-bold text-pink-500">다음에 할 일</p>
                {nextSchedule ? (
                  <p className="mt-1 text-lg font-black text-pink-900">{nextSchedule.title}</p>
                ) : (
                  <p className="mt-1 text-lg font-black text-pink-300">없음</p>
                )}
              </div>
              {nextSchedule ? (
                <div className="text-right">
                  <p className="text-sm font-black text-pink-900">{nextSchedule.start}</p>
                  <p className="mt-1 max-w-[120px] truncate text-xs text-pink-500">{nextSchedule.place}</p>
                </div>
              ) : (
                <p className="text-right text-xs text-pink-400">오늘 남은 일정이 없어요</p>
              )}
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="space-y-2">
        <div className="grid grid-cols-2 gap-2">
          <Button className="h-12 rounded-3xl text-base font-black" onClick={() => updateStatus(current.id, "도착 완료")}>
            <CheckCircle2 className="mr-2" /> 도착했어요
          </Button>
          <Button variant="secondary" className="h-12 rounded-3xl text-base font-black" onClick={() => updateStatus(current.id, "끝남")}>
            끝났어요
          </Button>
        </div>
        <Button className="h-12 w-full rounded-3xl bg-rose-500 text-base font-black hover:bg-rose-600" onClick={() => updateStatus(current.id, "귀가 완료")}>
          <Home className="mr-2" size={22} /> 집에 왔어요
        </Button>
      </div>

      <ChildScheduleAddBox
        showAdd={showAdd}
        setShowAdd={setShowAdd}
        newSchedule={newSchedule}
        updateNewSchedule={updateNewSchedule}
        addSchedule={addSchedule}
        cancelScheduleForm={cancelScheduleForm}
        selectedDateLabel={selectedDateLabel}
        child={child}
      />

      <ChildHopeQuote child={child} selectedDay={selectedDay} />

      <div className="space-y-2">
        <Button
          variant="outline"
          className="h-11 w-full rounded-3xl text-sm font-bold"
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

      
    </motion.div>
  );
}

function ChildScheduleAddBox({
  showAdd,
  setShowAdd,
  newSchedule,
  updateNewSchedule,
  addSchedule,
  cancelScheduleForm,
  selectedDateLabel,
  child,
}) {
  return (
    <Card className="rounded-[2rem] border border-rose-100 bg-white/80 shadow-sm backdrop-blur">
      <CardContent className="p-4">
        <div className="mb-3 flex items-center justify-between gap-3">
          <div>
            <p className="text-xs font-bold text-rose-400">{selectedDateLabel}</p>
            <p className="text-base font-black text-slate-900">{child.name} 일정 직접 추가</p>
          </div>
          <Button
            size="sm"
            variant={showAdd ? "secondary" : "default"}
            className="rounded-2xl"
            onClick={() => (showAdd ? cancelScheduleForm() : setShowAdd(true))}
          >
            {showAdd ? "접기" : "일정 추가"}
          </Button>
        </div>

        {showAdd && (
          <div className="space-y-2">
            <input
              value={newSchedule.title}
              onChange={(e) => updateNewSchedule("title", e.target.value)}
              placeholder="무슨 일정이야? 예: 영어, 친구 약속"
              className="w-full rounded-2xl border border-rose-100 bg-rose-50 px-4 py-3 text-sm font-bold outline-none focus:border-rose-300"
            />
            <div className="grid grid-cols-2 gap-2">
              <input
                type="time"
                value={newSchedule.start}
                onChange={(e) => updateNewSchedule("start", e.target.value)}
                className="w-full rounded-2xl border border-rose-100 bg-white px-4 py-3 text-sm font-bold outline-none focus:border-rose-300"
              />
              <input
                type="time"
                value={newSchedule.end}
                onChange={(e) => updateNewSchedule("end", e.target.value)}
                className="w-full rounded-2xl border border-rose-100 bg-white px-4 py-3 text-sm font-bold outline-none focus:border-rose-300"
              />
            </div>
            <input
              value={newSchedule.place}
              onChange={(e) => updateNewSchedule("place", e.target.value)}
              placeholder="어디에서 해? 예: 영어학원, 집"
              className="w-full rounded-2xl border border-rose-100 bg-white px-4 py-3 text-sm outline-none focus:border-rose-300"
            />
            <input
              value={newSchedule.items}
              onChange={(e) => updateNewSchedule("items", e.target.value)}
              placeholder="준비물 예: 교재, 필통, 물병"
              className="w-full rounded-2xl border border-rose-100 bg-white px-4 py-3 text-sm outline-none focus:border-rose-300"
            />
            <div className="grid grid-cols-2 gap-2">
              <Button variant="outline" className="h-11 rounded-2xl" onClick={cancelScheduleForm}>
                취소
              </Button>
              <Button className="h-11 rounded-2xl" onClick={addSchedule} disabled={!newSchedule.title.trim() || !newSchedule.start.trim()}>
                저장
              </Button>
            </div>
            <p className="rounded-2xl bg-orange-50 p-3 text-center text-xs font-bold text-orange-500">
              달력에서 고른 날짜에 저장돼요.
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

function ChildHopeQuote({ child, selectedDay }) {
  const quote = getChildHopeQuote(child.id, selectedDay);

  return (
    <div className="rounded-[2rem] border border-rose-100 bg-white/75 p-4 text-center shadow-sm backdrop-blur">
      <p className="text-xs font-bold text-rose-400">오늘의 용기 한마디</p>
      <p className="mt-2 break-keep text-base font-black leading-7 text-slate-800">“{quote}”</p>
      <p className="mt-2 text-xs font-bold text-slate-400">{child.name}이는 오늘도 충분히 멋져요 🌱</p>
    </div>
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
  locationChecks,
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
              <NoParentScheduleCard child={child} selectedDay={selectedDay} />
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
                <p className="mb-2 text-sm text-slate-500">
                  이동: {s.transport} · 준비물: {s.items}
                </p>
                {locationChecks?.[s.id] && (
                  <p className="mb-3 rounded-2xl bg-cyan-50 p-2 text-xs font-bold text-cyan-700">
                    위치 확인: {locationChecks[s.id].place || s.place} · {locationChecks[s.id].time} · 위치 상태: {getLocationAccuracyLabel(locationChecks[s.id].accuracy)}
                  </p>
                )}
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

function NoParentScheduleCard({ child, selectedDay }) {
  const reminders = getParentFamilyReminders(child.id, selectedDay);

  return (
    <div className="rounded-[2rem] border border-rose-100 bg-gradient-to-br from-rose-50 via-orange-50 to-white p-4">
      <div className="mb-4 text-center">
        <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-white text-2xl shadow-sm">
          💞
        </div>
        <p className="text-xs font-bold text-rose-400">
          {child.name} · {selectedDay}요일
        </p>
        <p className="mt-1 text-xl font-black text-slate-900">오늘은 가족 마음을 채우는 날</p>
        <p className="mt-2 break-keep text-sm leading-6 text-slate-500">
          일정이 비어 있는 시간에는 아이에게 사랑과 용기를 전해보세요.
        </p>
      </div>

      <div className="space-y-2">
        {reminders.map((item) => (
          <div key={item.title} className="flex items-center gap-3 rounded-3xl bg-white/80 p-3 text-left shadow-sm">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-rose-50 text-xl">
              {item.icon}
            </div>
            <div>
              <p className="font-black text-slate-900">{item.title}</p>
              <p className="mt-0.5 break-keep text-xs leading-5 text-slate-500">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-3 rounded-3xl bg-white/70 p-3 text-center text-xs font-bold leading-5 text-rose-500">
        오늘도 완벽한 부모보다 따뜻한 부모가 아이에게 더 오래 남습니다.
      </div>
    </div>
  );
}

function NotificationPanel({
  activeAlerts,
  appAlerts,
  permission,
  onRequestPermission,
  onTest,
  onClear,
  onReset,
  notices,
  newNotice,
  setNewNotice,
  addNotice,
  deleteNotice,
  role,
}) {
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
              <p className="text-xs text-slate-500">
                {role === "parent" ? "가족에게 보여줄 공지를 작성합니다." : "부모님이 남긴 공지를 확인합니다."}
              </p>
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

        {role === "parent" && (
          <div className="mb-3 rounded-3xl border border-rose-100 bg-rose-50 p-3">
            <p className="mb-2 text-sm font-black text-rose-600">부모님 공지 작성</p>
            <input
              value={newNotice.title}
              onChange={(e) => setNewNotice((prev) => ({ ...prev, title: e.target.value }))}
              placeholder="제목 예: 오늘은 영어 숙제 먼저 하기"
              className="mb-2 w-full rounded-2xl border border-rose-100 bg-white px-4 py-3 text-sm font-bold outline-none focus:border-rose-300"
            />
            <textarea
              value={newNotice.body}
              onChange={(e) => setNewNotice((prev) => ({ ...prev, body: e.target.value }))}
              placeholder="내용 예: 학원 다녀와서 물 마시고 10분 쉬었다가 숙제하자. 오늘도 잘하고 있어!"
              rows={3}
              className="w-full resize-none rounded-2xl border border-rose-100 bg-white px-4 py-3 text-sm leading-6 outline-none focus:border-rose-300"
            />
            <Button
              className="mt-2 h-11 w-full rounded-2xl"
              onClick={addNotice}
              disabled={!newNotice.title.trim() && !newNotice.body.trim()}
            >
              <Plus size={16} className="mr-1" /> 공지 등록
            </Button>
          </div>
        )}

        <div className="mb-3 rounded-3xl border border-orange-100 bg-white p-3">
          <div className="mb-2 flex items-center justify-between">
            <p className="text-sm font-black text-slate-900">가족 공지</p>
            <span className="rounded-full bg-orange-50 px-2 py-1 text-[10px] font-black text-orange-500">{notices.length}개</span>
          </div>
          {notices.length === 0 ? (
            <p className="rounded-2xl bg-slate-50 p-3 text-sm text-slate-500">
              아직 작성된 가족 공지사항이 없습니다.
            </p>
          ) : (
            <div className="space-y-2">
              {notices.map((notice) => (
                <div key={notice.id} className="rounded-2xl bg-orange-50/70 p-3">
                  <div className="mb-1 flex items-start justify-between gap-2">
                    <p className="break-keep text-sm font-black text-slate-900">{notice.title}</p>
                    {role === "parent" && (
                      <button
                        type="button"
                        onClick={() => deleteNotice(notice.id)}
                        className="shrink-0 rounded-full bg-white p-1.5 text-slate-300 hover:text-red-400"
                        title="공지 삭제"
                      >
                        <Trash2 size={14} />
                      </button>
                    )}
                  </div>
                  {notice.body && <p className="break-keep text-xs leading-5 text-slate-600">{notice.body}</p>}
                  <p className="mt-2 text-[10px] font-bold text-slate-400">{notice.author} · {notice.time}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="mb-3 rounded-2xl bg-slate-50 p-3 text-sm text-slate-600">
          현재 상태: <span className="font-bold text-slate-900">{permissionLabel}</span>
          <p className="mt-2 break-keep text-xs leading-5 text-slate-500">
            앱을 켜둔 상태에서는 일정 알림창이 화면에 바로 뜹니다. 휴대폰 잠금화면 알림은 브라우저 알림 권한을 허용해야 표시됩니다.
          </p>
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

function InfoBox({ icon, label, value, compact = false }) {
  return (
    <div className={`rounded-2xl bg-orange-50/70 ${compact ? "p-2" : "p-3"}`}>
      <div className="mb-0.5 flex items-center gap-1 text-slate-400">
        {icon}
        <span className="text-[10px] font-bold">{label}</span>
      </div>
      <p className={`break-keep font-black text-slate-800 ${compact ? "text-[13px]" : "text-base"}`}>{value}</p>
    </div>
  );
}
